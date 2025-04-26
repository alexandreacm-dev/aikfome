import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
  padding: 10px;
`;

const ContainerFavorites = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.banner};
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
`;

const TopContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;


export { Container, ContainerFavorites, TopContainer };
