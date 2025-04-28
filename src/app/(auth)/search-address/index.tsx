import React, { useState } from "react";
import { FlatList } from "react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Text from "@/components/Text";

import ErrorMessage from "@/components/ErrorMessage";
import useViewModel from "@/hooks/useViewModel";

import RenderCities from "@/components/RenderCities";
import Loading from "@/components/Loading";
import EmptyComponent from "@/components/EmptyComponent";

import Theme from "@/styles";
import * as S from "./styles";

const SearchAddress: React.FC = () => {
  const [stateId, setCityId] = useState<number>(0);
  const {
    states,
    isError,
    error,
    isLoading,
    isFetched,
    cities,
    isFetchedCity,
    isLoadingCity,
  } = useViewModel(stateId);

  const renderItem = ({ item }: { item: IState }) => (
    <>
      <S.Card onPress={() => setCityId(item.id)}>
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
          <S.StyledFlatList
            data={cities}
            ListEmptyComponent={
              <EmptyComponent message="Nenhuma cidade encontrada" />
            }
            numColumns={2}
            keyExtractor={(item: ICity) => item.id.toString()}
            renderItem={({ item }: { item: ICity }) => (
              <RenderCities item={item} />
            )}
          />
        </S.ContainerFlatList>
      )}
    </>
  );

  return (
    <S.Container>
      <Loading isLoading={isLoading && !isFetched} />

      {isError && !isLoading ? (
        <ErrorMessage message={error} />
      ) : (
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
