import React from "react";
import { Pressable } from "react-native";
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
        {favorites.map((favoriteStore) => {
          return (
            <StoreItem onlyLogo key={favoriteStore.id} store={favoriteStore} />
          );
        })}
      </S.FavoritesScrollView>
    </S.Container>
  );
};

export default Favorites;
