import React from "react";
import BannerMenu from "@/components/BannerMenu";
import * as S from "./styles";
import Text from "@/components/Text";

const Home: React.FC = () => {
  return (
    <S.Container>
      <BannerMenu />
      <S.ContainerFavorites>
        <S.TopContainer>
          <Text type="defaultSemiBold">Meus Favoritos</Text>
          <Text type="linkFavorite">Ver mais</Text>
        </S.TopContainer>
      </S.ContainerFavorites>
    </S.Container>
  );
};

export default Home;
