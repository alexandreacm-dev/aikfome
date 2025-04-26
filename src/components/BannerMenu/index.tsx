import React, { memo } from "react";
import { Image } from "expo-image";
import Text from "@/components/Text";

import Cupon from "@/assets/images/ic_cupon.png";
import Drink from "@/assets/images/ic_drink.png";
import pharmacy from "@/assets/images/ic_pharmacy.png";
import basket from "@/assets/images/grocery-basket.png";
import prato from "@/assets/images/pratos.png";

import AntDesign from "@expo/vector-icons/AntDesign";
import Theme from "@/styles";

import * as S from "./styles";

const BannerMenu: React.FC = () => {
  return (
    <>
      <S.ContainerBanner>
        <S.ContainerLeft>
          <Text type="default">Restaurantes</Text>
          <S.StyledViewBanner>
            <Image
              source={prato}
              style={{
                width: 70,
                height: 70,
              }}
            />
          </S.StyledViewBanner>
        </S.ContainerLeft>
        <S.ContainerRight>
          <Text type="default">Mercados</Text>
          <S.StyledViewBanner>
            <Image
              source={basket}
              style={{
                width: 70,
                height: 70,
              }}
            />
          </S.StyledViewBanner>
        </S.ContainerRight>
      </S.ContainerBanner>
      <S.ContainerBannerBottom>
        <S.CardContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
        >
          <Image source={pharmacy} style={{ width: 40, height: 40 }} />
          <Text
            type="default"
            style={{
              color: Theme.colors.text.secondary,
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Farmácias
          </Text>
        </S.CardContainer>
        <S.CardContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
        >
          <Image source={Drink} style={{ width: 40, height: 40 }} />
          <Text
            type="default"
            style={{
              color: Theme.colors.text.secondary,
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Bebidas
          </Text>
        </S.CardContainer>
        <S.CardContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
        >
          <Image source={Cupon} style={{ width: 40, height: 40 }} />
          <Text
            type="default"
            style={{
              color: Theme.colors.text.secondary,
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Cupons
          </Text>
        </S.CardContainer>
        <S.CardContainer
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
        >
          <AntDesign
            name="pluscircle"
            size={40}
            color={Theme.colors.text.secondary}
          />
          <Text
            type="default"
            style={{
              color: Theme.colors.text.secondary,
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Ver mais
          </Text>
        </S.CardContainer>
      </S.ContainerBannerBottom>
    </>
  );
};

export default memo(BannerMenu);
