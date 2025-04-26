import React from "react";
import { Stack } from "expo-router";
import theme from "@/styles";

export default function PublicRoutesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.bg.bg_primary,
        },
        headerTintColor: theme.colors.bg.secondary,
      }}
    >
      <Stack.Screen name="sign-in/index" options={{ headerTitle: "" }} />
      <Stack.Screen name="sign-up/index" options={{ headerTitle: "SignUp" }} />
    </Stack>
  );
}
