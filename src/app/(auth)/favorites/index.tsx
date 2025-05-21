import React, { useCallback, useEffect } from "react";

import { useLocation } from "@/contexts/location.context";
import { storageService } from "@/storage/storage.service";
import { key_favorites } from "@/constants";
import StoreItem from "../home/components/StoreItem";
import { FlatList } from "react-native";

import * as S from "./styles";
import Text from "@/components/Text";
import { isFavorite } from "@/utils";
import { IStore } from "@/models";

const Favorites: React.FC = () => {
  const { favorites, setFavorites } = useLocation();

  const handleFavorite = useCallback(
    (store: IStore) => {
      if (isFavorite(favorites, store.id)) {
        const allFavorites = favorites.filter(
          (favoriteCompany) => favoriteCompany.id !== store.id
        );
        setFavorites(allFavorites);
      } else {
        setFavorites([...favorites, store]);
      }
      storageService.setItem<IStore[]>(key_favorites, favorites);
    },
    [favorites]
  );

  return (
    <S.Container>
      <FlatList
        data={favorites}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <StoreItem
            key={item.id}
            store={item}
            handleFavorite={handleFavorite}
          />
        )}
      />
    </S.Container>
  );
};

export default Favorites;
