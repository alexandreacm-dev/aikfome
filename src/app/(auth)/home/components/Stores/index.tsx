import React from "react";
import { FlatList, Image, ScrollView } from "react-native";
// import Text from "@/components/Text";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/products.service";
import { useLocation } from "@/contexts/location.context";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import Text from "@/components/Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import * as S from "../../styles";

const Stores: React.FC = () => {
  const { cityId } = useLocation();
  const {
    data: products,
    isError,
    error,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ["products", cityId],
    enabled: !!cityId,
    queryFn: () => fetchProducts(cityId),
  });

  const renderItem = (product: IProduct) => {
    return (
      <S.CardStore key={product.id}>
        <S.ImageContainer>
          <S.StyledImage
            source={{ uri: product.virtual_avatar.default || "" }}
            width={60}
            height={60}
            resizeMode="contain"
          />
        </S.ImageContainer>
        <S.ContentView>
          <Text type="default" style={{ width: 250 }} numberOfLines={2}>
            {product.name}
          </Text>
          <S.ContainerStarView>
            <S.ContainerStar>
              <FontAwesome name="star" size={22} color="#FFB300" />
              <Text type="default" style={{ marginLeft: 2, fontSize: 16 }}>
                {product.ratings.average}
              </Text>
            </S.ContainerStar>
            <S.ContainerTime>
              <Text type="defaultSemiBold">{product.time_to_delivery} min</Text>
            </S.ContainerTime>
            <S.ContainerFavorite>
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            </S.ContainerFavorite>
          </S.ContainerStarView>
        </S.ContentView>
      </S.CardStore>
    );
  };

  if (!cityId) {
    <ErrorMessage message="É necessário selecionar uma cidade." />;
  }

  return (
    <S.Container>
      {isError && !isLoading && <ErrorMessage message={error.message} />}

      {isLoading && <Loading isLoading={isLoading} />}

      {isFetched && !isLoading && (
        <>
          <S.ContainerStore>
            <Text type="defaultSemiBold" style={{ fontSize: 20 }}>
              Lojas
            </Text>
          </S.ContainerStore>
          {products?.map((product) => renderItem(product))}
        </>
      )}
    </S.Container>
  );
};

export default Stores;
