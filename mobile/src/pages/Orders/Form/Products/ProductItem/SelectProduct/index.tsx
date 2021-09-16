import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { Avatar, ListItem, SearchBar } from "react-native-elements";
import { useSelector } from "react-redux";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import { RootState } from "../../../../../../stores/modules/rootReducer";

import { PriceListItemAPIResponse } from "../../../../../../types/other";
import { ProductAPIResponse } from "../../../../../../types/products";
import { OrderProduct, OrderValues } from "../../../types";

import api from "../../../../../../services/api";

interface SelectProductProps {
  onSelect: (product: OrderProduct) => void;
}

const SelectProduct: React.FC<SelectProductProps> = ({ onSelect }) => {
  const [priceList, setPriceList] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    ProductAPIResponse[]
  >([]);
  const [priceListItems, setPriceListItems] = useState<
    PriceListItemAPIResponse[]
  >([]);

  const { values } = useFormikContext<OrderValues>();

  const { clients } = useSelector((state: RootState) => state.client);
  const { products } = useSelector((state: RootState) => state.product);

  const selectProduct = (product: ProductAPIResponse) => {
    let price: number = 0;

    const priceListItem = priceListItems.find(
      (item) => item.CodigoProduto === product.CodigoERP
    );

    if (priceListItem) {
      price = parseFloat(priceListItem.Valor);
    }

    onSelect({
      id: product.CodigoERP,
      name: product.Descricao,
      percDiscount: "0",
      price: `${price}`,
      qty: "1",
      total: "0",
      unity: product.Unidade,
    });
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
              onPress={() => selectProduct(item)}
            >
              <Avatar
                source={require("../../../../../../../assets/flat-icons/box.png")}
              />
              <ListItem.Content>
                <ListItem.Title numberOfLines={1}>
                  {item.Descricao}
                </ListItem.Title>
                <ListItem.Subtitle>
                  Código: {item.CodigoERP} - Unidade: {item.Unidade}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )}
        />
      </TouchableWithoutFeedback>
    </>
  );
};

export default SelectProduct;
