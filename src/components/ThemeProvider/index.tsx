import * as React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components/native";
import DefaultTheme from "@/styles/light";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <DefaultThemeProvider theme={DefaultTheme}>{children}</DefaultThemeProvider>
  );
}
