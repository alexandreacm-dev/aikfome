import React, { useEffect } from "react";

import { useLocation } from "@/contexts/location.context";
import { storageService } from "@/storage/storage.service";
import { key_favorites } from "@/constants";
import StoreItem from "../home/components/StoreItem";
import { FlatList } from "react-native";

import * as S from "./styles";
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
      <FlatList
        data={favorites}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <StoreItem key={item.id} store={item} handleFavorite={() => {}} />
        )}
      />
    </S.Container>
  );
};

export default Favorites;
