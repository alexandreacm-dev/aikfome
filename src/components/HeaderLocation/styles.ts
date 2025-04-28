import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  padding: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.primary};
`;

const PressableButtom = styled.Pressable`
  width: 90%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export {
  Container,
  PressableButtom
}