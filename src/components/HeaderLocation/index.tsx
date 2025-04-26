import React from "react";
import { View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Text from "@/components/Text";

import * as S from "./styles";

const HeaderLocation: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerLocation>
        <EvilIcons name="location" size={24} color="white" />
        <Text type="location" style={{ color: "#FFF", marginLeft: 6 }}>
          Itapema - SC
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#FFF" />
      </S.ContainerLocation>
    </S.Container>
  );
};

export default HeaderLocation;
