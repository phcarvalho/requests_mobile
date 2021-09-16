import React from "react";
import { Icon, Input } from "react-native-elements";
import { RowView } from "../../../../../../components/Common";
import { OrderProduct } from "../../../types";

import { Header, HeaderContent, HeaderText } from "./styles";

interface ProductDetailsProps {
  product: OrderProduct | undefined;
  onProductChange: (
    fieldName: "qty" | "price" | "percDiscount",
    value: string
  ) => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onProductChange,
  onCancel,
  onConfirm,
}) => {
  if (!product) {
    return null;
  }

  return (
    <>
      <Header>
        <HeaderContent>
          <Icon name="close" onPress={onCancel} />
          <Icon name="done" onPress={onConfirm} />
        </HeaderContent>
        <HeaderText numberOfLines={1}>
          {product.id} | {product.name}
        </HeaderText>
      </Header>
      <RowView>
        <Input
          label="Quantidade"
          keyboardType="number-pad"
          value={`${product.qty}`}
          onChangeText={(text) => onProductChange("qty", text)}
        />
        <Input
          label="Preço"
          keyboardType="number-pad"
          value={`${product.price}`}
          onChangeText={(text) => onProductChange("price", text)}
        />
      </RowView>
      <Input
        label="Desconto"
        keyboardType="number-pad"
        value={`${product.percDiscount}`}
        onChangeText={(text) => onProductChange("percDiscount", text)}
      />
    </>
  );
};

export default ProductDetails;
