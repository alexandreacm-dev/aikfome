import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
  padding: 10px;
  justify-content: center;
`;

const Card = styled.Pressable`
  width: 100%;
  padding: 15px;
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color:  ${({ theme }: ThemeProp) => theme.colors.bg.primary};
  border-bottom-color: ${({ theme }: ThemeProp) => theme.colors.bg.primary};
`;

const CardName = styled.View`
  width: 90%;
  justify-content: center;
  align-items: flex-start;
`;

const CardIcon = styled.View`
  width: 10%;
  justify-content: center;
  align-items: flex-end;
`;

const ContainerFlatList = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.banner};
  margin-bottom: 10px;
`;

const StyledFlatListCity = styled.FlatList``;


export {
  Container,
  Card,
  CardName,
  CardIcon,
  ContainerFlatList,
  StyledFlatListCity
};
