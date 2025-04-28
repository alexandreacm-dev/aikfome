import React from "react";
import { StyleProp, Text as RNText, TextStyle, TextProps } from "react-native";
import styles from "./styles";

type ThemedTextProps = TextProps & {
  children: React.ReactNode;
  type?:
    | "default"
    | "defaultSemiBold"
    | "title"
    | "subTitle"
    | "link"
    | "location"
    | "linkFavorite";
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<ThemedTextProps> = ({
  children,
  type = "default",
  style,
  ...props
}) => {
  return (
    <RNText
      style={[
        type == "default" ? styles.default : undefined,
        type == "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type == "title" ? styles.title : undefined,
        type == "subTitle" ? styles.subTitle : undefined,
        type == "link" ? styles.link : undefined,
        type == "location" ? styles.location : undefined,
        type == "linkFavorite" ? styles.linFavorite : undefined,
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
