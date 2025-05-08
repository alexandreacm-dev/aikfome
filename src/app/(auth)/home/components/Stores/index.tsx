import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStores } from "@/services/stores.service";
import { useLocation } from "@/contexts/location.context";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import Text from "@/components/Text";

import { storageService } from "@/storage/storage.service";
import { key_favorites } from "@/constants";
import StoreItem from "../StoreItem";
import * as S from "../../styles";
import { isFavorite } from "@/utils";
import { IStore } from "@/models";

const Stores: React.FC = () => {
  const { cityId, favorites, setFavorites } = useLocation();
  const {
    data: stores,
    isError,
    error,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ["stores", cityId],
    enabled: !!cityId,
    queryFn: () => fetchStores(cityId),
  });

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
          {stores?.map((store) => (
            <StoreItem
              key={store.id}
              store={store}
              handleFavorite={handleFavorite}
            />
          ))}
        </>
      )}
    </S.Container>
  );
};

export default Stores;
