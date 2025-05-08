import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

type ImageProp = {
  borderRadius: number;
}

const Container = styled.View`
  flex: 1;
`;

const ScrollViewContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  padding: 12px;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
`;

const ContainerHeaderFavorites = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 5px;
  margin-top: 40px;
  border-radius: 10px;
`;

const HeaderFavorites = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerStore = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 5px;
`;

const CardStorePressable = styled.Pressable`
  width: 100%;
  margin-bottom:15px;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.View`
  width: 20%;
  justify-content: center;
  align-items: flex-start;
`;

const ContentView = styled.View`
  width: 80%;
  justify-content: center;
  align-items: flex-start;
`;

const ContainerStarView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerStar = styled.View`
  width: 20%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ContainerTime = styled.View`
  width: 50%;
  justify-content: center;
  align-items: flex-start;
`;

const PressableFavorite = styled.Pressable`
  width: 30%;
  justify-content: center;
  align-items: flex-end;
`;

const StyledImage = styled.Image<ImageProp>`
  width: 60px;
  height: 60px;
  border-radius: ${({ borderRadius }: { borderRadius: number }) => borderRadius ? `${borderRadius}px` : '10px'};
`;

const FavoritesScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  flex: 1;
  padding: 5px;
  margin-bottom: 10px
`;

const PressableOnLyLogo = styled.Pressable`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export {
  ScrollViewContainer,
  ContainerHeaderFavorites,
  HeaderFavorites,
  Container,
  ContainerStore,
  CardStorePressable,
  ImageContainer,
  ContentView,
  StyledImage,
  ContainerStarView,
  ContainerStar,
  ContainerTime,
  PressableFavorite,
  FavoritesScrollView,
  PressableOnLyLogo
};
