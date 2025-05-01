import React, { useEffect } from "react";
import BannerMenu from "@/app/(auth)/home/components/BannerMenu";
import HeaderLocation from "@/components/HeaderLocation";
import Favorites from "./components/Favorites";
import { useLocation } from "@/contexts/location.context";
import { router } from "expo-router";
import Stores from "./components/Stores";
import * as S from "./styles";
import { storageService } from "@/storage/storage.service";
import { key_favorites, key_location } from "@/constants";
import { storage } from "@/storage/mmKV.storage";

const Home: React.FC = () => {
  const { locationName, setLocationName, favorites, setFavorites } =
    useLocation();

  useEffect(() => {
    // console.log(storage.getAllKeys());

    async function loadingStorage() {
      try {
        const locationStateCity = await storageService.getItem<string>(
          key_location
        );

        if (locationStateCity == null && locationName == "") {
          router.navigate("/(auth)/search-address");
        }

        if (locationStateCity !== null) {
          setLocationName(locationStateCity);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadingStorage();
  }, []);

  return (
    <>
      <HeaderLocation />
      <S.ScrollViewContainer>
        <BannerMenu />
        <Favorites />
        <Stores />
      </S.ScrollViewContainer>
    </>
  );
};

export default Home;
