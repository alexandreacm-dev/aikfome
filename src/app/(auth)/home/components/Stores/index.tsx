import React, { useCallback, useEffect } from "react";
// import Text from "@/components/Text";
import { useQuery } from "@tanstack/react-query";
import { fetchStores } from "@/services/products.service";
import { useLocation } from "@/contexts/location.context";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import Text from "@/components/Text";

import * as S from "../../styles";
import { storageService } from "@/storage/storage.service";
import { key_CityId, key_favorites, key_location } from "@/constants";
import { storage } from "@/storage/mmKV.storage";
import StoreItem from "../StoreItem";

const Stores: React.FC = () => {
  const { cityId, setCityId, favorites, setFavorites } = useLocation();
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

  useEffect(() => {
    async function loadingStorage() {
      try {
        const cityId = await storageService.getItem<number>(key_CityId);

        if (cityId !== null) {
          setCityId(cityId);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadingStorage();
  }, []);

  const handleFavorite = useCallback(
    (store: IStore) => {
      setFavorites([...favorites, store]);
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
