import React from "react";
import * as S from "@/app/(auth)/home/styles";
import Text from "@/components/Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type ItemProps = {
  store: IStore;
  handleFavorite: (store: IStore) => void;
  onlyLogo?: boolean;
};

const StoreItem: React.FC<ItemProps> = ({
  store,
  handleFavorite,
  onlyLogo,
}) => {
  if (onlyLogo) {
    return (
      <S.StyleOnLyLogo>
        <S.StyledImage
          source={{ uri: store.virtual_avatar.default || "" }}
          width={60}
          height={60}
          resizeMode="contain"
          borderRadius={50}
        />
      </S.StyleOnLyLogo>
    );
  }

  return (
    <S.CardStore>
      <S.ImageContainer>
        <S.StyledImage
          source={{ uri: store.virtual_avatar.default || "" }}
          width={60}
          height={60}
          resizeMode="contain"
          borderRadius={10}
        />
      </S.ImageContainer>
      <S.ContentView>
        <Text type="default" style={{ width: 250 }} numberOfLines={2}>
          {store.name}
        </Text>
        <S.ContainerStarView>
          <S.ContainerStar>
            <FontAwesome name="star" size={22} color="#FFB300" />
            <Text type="default" style={{ marginLeft: 2, fontSize: 16 }}>
              {store.ratings.average}
            </Text>
          </S.ContainerStar>
          <S.ContainerTime>
            <Text type="defaultSemiBold">{store.time_to_delivery} min</Text>
          </S.ContainerTime>
          <S.PressableFavorite onPress={() => handleFavorite(store)}>
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          </S.PressableFavorite>
        </S.ContainerStarView>
      </S.ContentView>
    </S.CardStore>
  );
};

export default StoreItem;
