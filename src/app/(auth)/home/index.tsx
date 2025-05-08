import React, { useEffect } from "react";
import BannerMenu from "@/app/(auth)/home/components/BannerMenu";
import HeaderLocation from "@/components/HeaderLocation";
import Favorites from "./components/Favorites";
import { useLocation } from "@/contexts/location.context";
import { router } from "expo-router";
import Stores from "./components/Stores";
import * as S from "./styles";

const Home: React.FC = () => {
  const { locationName } = useLocation();

  useEffect(() => {
    if (locationName == "") {
      router.navigate("/(auth)/search-address");
    }
  }, []);

  return (
    <S.Container>
      <HeaderLocation />
      <S.ScrollViewContainer>
        <BannerMenu />
        <Favorites />
        <Stores />
      </S.ScrollViewContainer>
    </S.Container>
  );
};

export default Home;
