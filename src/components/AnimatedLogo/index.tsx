import React from "react";
import { MotiView } from "moti";
import logo from "@/assets/images/aikfome_novo_logo.png";
import { Image } from "expo-image";
import * as S from "./styles";

const AnimatedLogo: React.FC = () => {
  return (
    <MotiView
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "spring",
        duration: 3000,
      }}
    >
      <S.Logo>
        <Image
          source={logo}
          style={{ width: 90, height: 90, borderRadius: "50%" }}
        />
      </S.Logo>
    </MotiView>
  );
};

export default AnimatedLogo;
