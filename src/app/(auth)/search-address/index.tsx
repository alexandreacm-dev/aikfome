import React, { useState } from "react";
import { FlatList } from "react-native";
import { router } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Text from "@/components/Text";

import ErrorMessage from "@/components/ErrorMessage";
import useLocationViewModel from "@/hooks/useLocationViewModel";

import RenderItemCity from "@/components/RenderItemCity";
import Loading from "@/components/Loading";
import EmptyComponent from "@/components/EmptyComponent";
import { useLocation } from "@/contexts/location.context";

import Theme from "@/styles";
import * as S from "./styles";
import { storageService } from "@/storage/storage.service";
import { key_CityId, key_location } from "@/constants";
import { ICity, IState } from "@/models";

const SearchAddress: React.FC = () => {
  const { setLocationName, setCityId } = useLocation();
  const [stateId, setStateId] = useState<number>(0);
  const {
    states,
    isErrorStates,
    errorState,
    isLoadingStates,
    isFetchedStates,
    cities,
    isFetchedCity,
    isLoadingCity,
    isErrorCity,
    ErrorCity,
  } = useLocationViewModel(stateId);

  const renderItem = ({ item }: { item: IState }) => (
    <>
      <S.Card onPress={() => setStateId(item.id)}>
        <S.CardName>
          <Text type="default">{item.name}</Text>
        </S.CardName>
        <S.CardIcon>
          <SimpleLineIcons
            name={item.id == stateId ? "arrow-up" : "arrow-down"}
            size={20}
            color={Theme.colors.bg.primary}
          />
        </S.CardIcon>
      </S.Card>

      {item.id == stateId && <Loading isSmall isLoading={isLoadingCity} />}

      {item.id == stateId && isFetchedCity && (
        <S.ContainerFlatList>
          <S.StyledFlatListCity
            data={cities}
            ListEmptyComponent={
              <EmptyComponent message="Nenhuma cidade encontrada" />
            }
            numColumns={2}
            keyExtractor={(item: ICity) => item.id.toString()}
            renderItem={({ item }: { item: ICity }) => (
              <RenderItemCity item={item} onGoToCity={handleCity} />
            )}
          />
        </S.ContainerFlatList>
      )}
    </>
  );

  const handleCity = (locationName: string, cityId: number) => {
    storageService.setItem(key_location, locationName);
    storageService.setItem(key_CityId, cityId);
    setLocationName(locationName);
    setCityId(cityId);
    router.dismissAll();
  };

  return (
    <S.Container>
      <Loading isLoading={isLoadingStates && !isFetchedStates} />

      {isErrorStates && !isLoadingStates && (
        <ErrorMessage message={errorState} />
      )}

      {isErrorCity && !isLoadingCity && <ErrorMessage message={ErrorCity} />}

      {states && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={states}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </S.Container>
  );
};

export default SearchAddress;
