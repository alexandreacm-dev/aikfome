import React from "react";
import { View } from "react-native";
import Text from "../Text";
import { measure } from "react-native-reanimated";

// import { Container } from './styles';

type Props = {
  message: string;
};

const EmptyComponent: React.FC<Props> = ({ message }) => {
  return (
    <View style={{ width: "100%", padding: 5 }}>
      <Text type="default">{message}</Text>
    </View>
  );
};

export default EmptyComponent;
