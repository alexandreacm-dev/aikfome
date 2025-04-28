import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.secondary};
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


export { ScrollViewContainer, ContainerFavorites, TopContainer };
