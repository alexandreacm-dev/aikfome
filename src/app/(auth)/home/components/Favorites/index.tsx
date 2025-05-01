import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
import { useLocation } from "@/contexts/location.context";
import * as S from "@/app/(auth)/home/styles";
import StoreItem from "../StoreItem";
import { storageService } from "@/storage/storage.service";
import { key_favorites } from "@/constants";
import Text from "@/components/Text";

const Favorites: React.FC = () => {
  const { favorites, setFavorites } = useLocation();
  useEffect(() => {
    // console.log(storage.getAllKeys());
    async function loadingStorage() {
      try {
        const localFavorites = await storageService.getItem<IStore[]>(
          key_favorites
        );

        if (localFavorites !== null) {
          setFavorites(localFavorites);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadingStorage();
  }, []);

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
        {favorites &&
          favorites.map((favorite) => {
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
