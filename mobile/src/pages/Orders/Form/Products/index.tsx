import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import { RootState } from "../../../../stores/modules/rootReducer";

import { Container, Content } from "../../../../components/Common";

import {
  Avatar,
  Icon,
  ListItem,
  Overlay,
  SearchBar,
  Text,
} from "react-native-elements";
import { useFormikContext } from "formik";
import { OrderValues } from "../types";
import { formatPrice } from "../../../../utils/price";

import {
  ErrorText,
  NoProductContainer,
  NoProductText,
  QtyContainer,
} from "./styles";
import { ProductAPIResponse } from "../../../../types/products";
import { PriceListItemAPIResponse } from "../../../../types/other";
import api from "../../../../services/api";

const OrderFormProducts: React.FC = () => {
  const [priceListItems, setPriceListItems] = useState<
    PriceListItemAPIResponse[]
  >([]);
  const [priceList, setPriceList] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    ProductAPIResponse[]
  >([]);

  const { products } = useSelector((state: RootState) => state.product);
  const { clients } = useSelector((state: RootState) => state.client);

  const { values, setFieldValue, errors } = useFormikContext<OrderValues>();

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const fetchPriceListItems = async () => {
    try {
      const { data } = await api.get<PriceListItemAPIResponse[]>(
        "/ItensLista",
        {
          params: {
            codigoLista: priceList,
          },
        }
      );

      setPriceListItems(data);
    } catch (error) {
      console.log("Price List Item error:", priceList);
    }
  };

  const addProduct = (product: ProductAPIResponse) => {
    let price: number = 0;

    const priceListItem = priceListItems.find(
      (item) => item.CodigoProduto === product.CodigoERP
    );

    if (priceListItem) {
      price = parseFloat(priceListItem.Valor);
    }

    setFieldValue("products", [
      ...values.products,
      {
        id: product.CodigoERP,
        name: product.Descricao,
        price: price,
        qty: 1,
      },
    ]);

    toggleOverlay();
  };

  const addToProductQty = (productId: string, increase: boolean = true) => {
    const productList = [...values.products];
    const index = productList.findIndex((p) => p.id === productId);

    productList[index].qty += increase ? 1 : -1;

    if (!increase && productList[index].qty <= 0) {
      productList.splice(index, 1);
    }

    setFieldValue("products", productList);
  };

  useEffect(() => {
    const currentClient = clients.find(
      (client) => client.CodigoDoCliente === values.client
    );

    setPriceList(currentClient?.ListaDePreco ?? "");
  }, [values.client]);

  useEffect(() => {
    fetchPriceListItems();
  }, [priceList]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredProductsList = products.filter(
        (product) =>
          product.CodigoERP.toLowerCase().includes(
            searchProduct.toLowerCase()
          ) ||
          product.Descricao.toLowerCase().includes(searchProduct.toLowerCase())
      );

      setFilteredProducts(filteredProductsList);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [products, searchProduct]);

  return (
    <Container>
      <Content
        title="Produtos"
        fill
        rightComponent={<Icon name="add" onPress={toggleOverlay} />}
      >
        {values.products.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => `product-${index}`}
            data={values.products}
            renderItem={({ item, index }) => (
              <ListItem key={index} bottomDivider>
                <Avatar
                  source={require("../../../../../assets/flat-icons/box.png")}
                />
                <ListItem.Content>
                  <ListItem.Title numberOfLines={1}>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>
                    Preço Unitário: {formatPrice(item.price)}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    Total: {formatPrice(item.price * item.qty)}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <QtyContainer>
                  <Icon
                    type="material-community"
                    name="chevron-up"
                    color="#666"
                    size={20}
                    onPress={() => addToProductQty(item.id)}
                  />
                  <Text style={{ textAlign: "center" }}>{item.qty}</Text>
                  <Icon
                    type="material-community"
                    name="chevron-down"
                    color="#666"
                    size={20}
                    onPress={() => addToProductQty(item.id, false)}
                  />
                </QtyContainer>
              </ListItem>
            )}
          />
        ) : (
          <>
            <ErrorText>{errors.products ?? ""}</ErrorText>

            <NoProductContainer>
              <NoProductText>Nenhum produto adicionado</NoProductText>
            </NoProductContainer>
          </>
        )}
      </Content>
      <Overlay
        isVisible={overlayVisible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          width: "90%",
          height: "90%",
        }}
      >
        <>
          <SearchBar
            round
            placeholder="Digite o nome ou ID do produto"
            value={searchProduct}
            onChangeText={(text) => setSearchProduct(text)}
            containerStyle={{
              height: 50,
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              margin: 0,
              padding: 0,
            }}
            inputContainerStyle={{
              height: 40,
            }}
          />
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <FlatList
              keyExtractor={(item, index) => item.CodigoERP}
              data={filteredProducts}
              renderItem={({ item, index }) => (
                <ListItem
                  key={index}
                  bottomDivider
                  onPress={() => addProduct(item)}
                >
                  <Avatar
                    source={require("../../../../../assets/flat-icons/box.png")}
                  />
                  <ListItem.Content>
                    <ListItem.Title numberOfLines={1}>
                      {item.Descricao}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      Código: {item.CodigoERP} - Unidade: {item.Unidade}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <Icon name="add" />
                </ListItem>
              )}
            />
          </TouchableWithoutFeedback>
        </>
      </Overlay>
    </Container>
  );
};

export default OrderFormProducts;
