import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
import { useLocation } from "@/contexts/location.context";
import * as S from "@/app/(auth)/home/styles";
import StoreItem from "../StoreItem";

import Text from "@/components/Text";

const Favorites: React.FC = () => {
  const { favorites } = useLocation();

  if (!favorites.length) {
    return null;
  }

  return (
    <S.Container>
      <S.ContainerHeaderFavorites>
        <S.HeaderFavorites>
          <Text type="defaultSemiBold">Meus Favoritos</Text>
          <Pressable onPress={() => router.navigate("/(auth)/favorites")}>
            <Text type="linkFavorite">Ver mais </Text>
          </Pressable>
        </S.HeaderFavorites>
      </S.ContainerHeaderFavorites>
      <S.FavoritesScrollView>
        {favorites.map((favorite) => {
          return (
            <StoreItem
              onlyLogo
              key={favorite.id}
              store={favorite}
              handleFavorite={() => {}}
            />
          );
        })}
      </S.FavoritesScrollView>
    </S.Container>
  );
};

export default Favorites;
