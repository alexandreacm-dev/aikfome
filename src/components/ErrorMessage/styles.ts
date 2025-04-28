import { ThemeProp } from "@/utils";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  background-color: ${({ theme }: ThemeProp) => theme.colors.bg.error};
`;

export { Container }