import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { useFormikContext } from "formik";
import { Avatar, Icon, ListItem, Overlay, Text } from "react-native-elements";

import { RootState } from "../../../../stores/modules/rootReducer";

import { Container, Content } from "../../../../components/Common";

import { formatPrice } from "../../../../utils/price";
import { OrderValues } from "../types";

import {
  ErrorText,
  NoProductContainer,
  NoProductText,
  QtyContainer,
} from "./styles";

import ProductItem from "./ProductItem";
import { convertToNumber } from "../../../../utils/numbers";

const OrderFormProducts: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const { values, setFieldValue, errors } = useFormikContext<OrderValues>();

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const removeProduct = (productId: string) => {
    const productIndex = values.products.findIndex(
      (product) => product.id === productId
    );

    const products = [...values.products];
    products.splice(productIndex, 1);

    setFieldValue("products", products);
  };

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
                    Preço: {formatPrice(convertToNumber(item.price))} | Qtde:{" "}
                    {convertToNumber(item.qty)}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    Desconto: {convertToNumber(item.percDiscount)}% | Total:{" "}
                    {formatPrice(convertToNumber(item.total))}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <QtyContainer>
                  <Icon
                    name="trash-o"
                    type="font-awesome"
                    color="red"
                    onPress={() => removeProduct(item.id)}
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
        <ProductItem onClose={() => setOverlayVisible(false)} />
      </Overlay>
    </Container>
  );
};

export default OrderFormProducts;
