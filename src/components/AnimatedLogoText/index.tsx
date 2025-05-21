import React from "react";
import { useWindowDimensions } from "react-native";

import { MotiView } from "moti";

import { Image } from "expo-image";
import theme from "@/styles";
import Text from "../Text";

type LogoTextProps = {
  source?: any;
  text?: string;
};

const AnimatedLogoText: React.FC<LogoTextProps> = ({ source, text }) => {
  const { width } = useWindowDimensions();
  return (
    <MotiView
      from={{
        opacity: 0,
        translateX: width,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: "spring",
        duration: 4000,
      }}
    >
      {source ? (
        <Image
          source={source}
          style={{
            width: 150,
            height: 35,
            tintColor: theme.colors.text.textBlack,
          }}
        />
      ) : (
        <Text type="title">{text}</Text>
      )}
    </MotiView>
  );
};

export default AnimatedLogoText;
