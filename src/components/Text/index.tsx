import React from "react";
import { StyleProp, TextProps, View, Text as RNText } from "react-native";
import styles from "./styles";

type ThemedTextProps = TextProps & {
  children: React.ReactNode;
  type?: "default" | "defaultSemiBold" | "title" | "subTitle";
  style?: StyleProp<TextProps>;
};

const Text: React.FC<ThemedTextProps> = ({
  children,
  type = "default",
  style,
  ...props
}) => {
  return (
    <View>
      <RNText
        style={[
          style,
          type == "default" ? styles.default : undefined,
          type == "defaultSemiBold" ? styles.defaultSemiBold : undefined,
          type == "title" ? styles.title : undefined,
          type == "subTitle" ? styles.subTitle : undefined,
        ]}
        {...props}
      >
        {children}
      </RNText>
    </View>
  );
};

export default Text;
