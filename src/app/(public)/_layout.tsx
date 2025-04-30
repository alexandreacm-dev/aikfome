import React from "react";
import { Stack } from "expo-router";
import theme from "@/styles";

export default function PublicRoutesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
        headerTintColor: theme.colors.bg.secondary,
      }}
    >
      <Stack.Screen
        name="sign-in/index"
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="sign-up/index"
        options={{ headerTitle: "SignUp", headerShown: true }}
      />
    </Stack>
  );
}
