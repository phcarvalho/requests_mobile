import React, { useEffect, useState } from "react";
import { Avatar, ListItem, SearchBar, Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Button, FlatList } from "react-native";

import { RootState } from "../../../stores/modules/rootReducer";
import { fetchProducts } from "../../../stores/modules/product";

import { Container } from "../../../components/Common";
import { ProductAPIResponse } from "../../../types/products";
import ArrowButton from "../../../components/Common/ArrowButton";

const productSearch = (product: ProductAPIResponse, searchText: string) => {
  return (
    product.CodigoERP.toLowerCase().includes(searchText.toLowerCase()) ||
    product.Descricao.toLowerCase().includes(searchText.toLowerCase())
  );
};

const ProductList: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    ProductAPIResponse[]
  >([]);

  const dispatch = useDispatch();

  const { products, loading } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredProductsList = products.filter((product) =>
        productSearch(product, searchText)
      );

      setFilteredProducts(filteredProductsList);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  return (
    <Container
      header={{
        title: "Produtos",
      }}
    >
      <FlatList
        keyExtractor={(item, index) => item.CodigoERP}
        data={filteredProducts}
        onRefresh={() => dispatch(fetchProducts())}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <ListItem key={index} bottomDivider>
            <Avatar source={require("../../../../assets/flat-icons/box.png")} />
            <ListItem.Content>
              <ListItem.Title numberOfLines={1}>
                {item.Descricao}
              </ListItem.Title>
              <ListItem.Subtitle>
                Código: {item.CodigoERP} - Unidade: {item.Unidade}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default ProductList;
