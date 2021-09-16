import { useFormikContext } from "formik";
import React, { useState } from "react";
import { convertToNumber } from "../../../../../utils/numbers";
import { formatPrice } from "../../../../../utils/price";

import { OrderProduct, OrderValues } from "../../types";

import ProductDetails from "./ProductDetails";
import SelectProduct from "./SelectProduct";

// import { Container } from './styles';

interface ProductItemProps {
  onClose: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [product, setProduct] = useState<OrderProduct>();

  const { setFieldValue, values } = useFormikContext<OrderValues>();

  const changeProduct = (fieldName: keyof OrderProduct, value: string) => {
    if (!product) {
      return;
    }

    const changedProduct: OrderProduct = { ...product };

    changedProduct[fieldName] = value;

    setProduct(changedProduct);
  };

  const addProductAndClose = () => {
    if (!product) {
      return;
    }

    const products: OrderProduct[] = [...values.products];

    setFieldValue("products", [
      ...products,
      {
        ...product,
        total: formatPrice(
          convertToNumber(product.qty) *
            convertToNumber(product.price) *
            (1 - convertToNumber(product.percDiscount) / 100)
        ),
      },
    ]);
    onClose();
  };

  return (
    <>
      {
        {
          0: (
            <SelectProduct
              onSelect={(product) => {
                setProduct(product);
                setStep(1);
              }}
            />
          ),
          1: (
            <ProductDetails
              product={product}
              onProductChange={changeProduct}
              onConfirm={() => addProductAndClose()}
              onCancel={() => {
                setStep(0);
                setProduct(undefined);
              }}
            />
          ),
        }[step]
      }
    </>
  );
};

export default ProductItem;
