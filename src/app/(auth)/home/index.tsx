import React from "react";
import BannerMenu from "@/components/BannerMenu";
import * as S from "./styles";
import Text from "@/components/Text";
import HeaderLocation from "@/components/HeaderLocation";

const Home: React.FC = () => {
  return (
    <>
      <HeaderLocation />
      <S.ScrollViewContainer>
        <BannerMenu />
        <S.ContainerFavorites>
          <S.TopContainer>
            <Text type="defaultSemiBold">Meus Favoritos</Text>
            <Text type="linkFavorite">Ver mais</Text>
          </S.TopContainer>
        </S.ContainerFavorites>
      </S.ScrollViewContainer>
    </>
  );
};

export default Home;
