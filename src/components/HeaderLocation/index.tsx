import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Text from "@/components/Text";
import lightTheme from "@/styles";

import * as S from "./styles";
import { router } from "expo-router";
import LogOutButton from "../LogoutButton";

const HeaderLocation: React.FC = () => {
  const handleSearchLocation = () => {
    router.navigate("/(auth)/search-address");
  };
  return (
    <S.Container>
      <S.PressableButtom onPress={handleSearchLocation}>
        <EvilIcons
          name="location"
          size={24}
          color={lightTheme.colors.bg.secondary}
        />
        <Text
          type="location"
          style={{ color: lightTheme.colors.bg.secondary, marginLeft: 6 }}
        >
          Itapema - SC
        </Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={lightTheme.colors.text.secondary}
        />
      </S.PressableButtom>
      <LogOutButton />
    </S.Container>
  );
};

export default HeaderLocation;
