import React, { useCallback } from "react";
import Text from "@/components/Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocation } from "@/contexts/location.context";
import * as S from "@/app/(auth)/home/styles";
import { isFavorite } from "@/utils";
import { router } from "expo-router";
import { IStore } from "@/models";

type ItemProps = {
  store: IStore;
  handleFavorite?: (store: IStore) => void;
  onlyLogo?: boolean;
};

const StoreItem: React.FC<ItemProps> = ({
  store,
  handleFavorite,
  onlyLogo,
}) => {
  const { favorites } = useLocation();

  const onGoToDetailStore = useCallback(() => {
    router.navigate("/(auth)/details-store");
  }, []);

  if (onlyLogo) {
    return (
      <S.PressableOnLyLogo onPress={onGoToDetailStore}>
        <S.StyledImage
          source={{ uri: store.virtual_avatar.default || "" }}
          width={60}
          height={60}
          resizeMode="contain"
          borderRadius={50}
        />
      </S.PressableOnLyLogo>
    );
  }

  return (
    <S.CardStorePressable onPress={onGoToDetailStore}>
      <S.ImageContainer>
        <S.StyledImage
          source={{ uri: store.virtual_avatar.default || "" }}
          width={55}
          height={55}
          resizeMode="contain"
          borderRadius={10}
        />
      </S.ImageContainer>
      <S.ContentView>
        <Text
          type="default"
          style={{ width: 250, fontSize: 16 }}
          numberOfLines={2}
        >
          {store.name}
        </Text>
        <S.ContainerStarView>
          <S.ContainerStar>
            <FontAwesome name="star" size={18} color="#FFB300" />
            <Text type="default" style={{ marginLeft: 2, fontSize: 14 }}>
              {store.ratings.average}
            </Text>
          </S.ContainerStar>
          <S.ContainerTime>
            <Text type="defaultSemiBold" style={{ fontSize: 14 }}>
              {store.time_to_delivery} min
            </Text>
          </S.ContainerTime>
          <S.PressableFavorite
            onPress={() => (handleFavorite ? handleFavorite(store) : null)}
          >
            <MaterialIcons
              name={
                isFavorite(favorites, store.id)
                  ? "favorite"
                  : "favorite-outline"
              }
              size={24}
              color="black"
            />
          </S.PressableFavorite>
        </S.ContainerStarView>
      </S.ContentView>
    </S.CardStorePressable>
  );
};

export default StoreItem;
