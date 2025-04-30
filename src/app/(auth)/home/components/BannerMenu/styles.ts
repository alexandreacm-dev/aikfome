import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
  margin-top: 10px;
`;

const ContainerBanner = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerBannerBottom = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ContainerLeft = styled.View`
  width: 185px;
  height: 110px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.banner};
`;

const ContainerRight = styled.View`
  width: 185px;
  height: 110px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.banner};
`;

const CardContainer = styled.View`
  width: 90px;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.banner};
`;

const StyledViewBanner = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  ContainerBanner,
  ContainerLeft,
  ContainerRight,
  CardContainer,
  ContainerBannerBottom,
  StyledViewBanner
};
