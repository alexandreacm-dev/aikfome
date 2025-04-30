import React from "react";
import Text from "@/components/Text";
import * as S from "@/app/(auth)/home/styles";
import { Pressable } from "react-native";
import { router } from "expo-router";

const Favorites: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerFavorites>
        <S.TopContainer>
          <Text type="defaultSemiBold">Meus Favoritos</Text>
          <Pressable onPress={() => router.navigate("/(auth)/favorites")}>
            <Text type="linkFavorite">Ver mais</Text>
          </Pressable>
        </S.TopContainer>
      </S.ContainerFavorites>
    </S.Container>
  );
};

export default Favorites;
