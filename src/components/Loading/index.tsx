import React from "react";
import { ActivityIndicator, View } from "react-native";
import Theme from "@/styles";
// import { Container } from './styles';

type Props = {
  isLoading: boolean;
  isSmall?: boolean;
};

const Loading: React.FC<Props> = ({ isLoading, isSmall }) => {
  if (!isLoading) return null;

  return (
    <View style={{ flex: 1, padding: 5 }}>
      <ActivityIndicator
        size={isSmall ? "small" : "large"}
        color={Theme.colors.bg.primary}
      />
    </View>
  );
};

export default Loading;
