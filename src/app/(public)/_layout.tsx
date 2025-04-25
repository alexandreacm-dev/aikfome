import React from "react";
import { Stack } from "expo-router";

export default function PublicRoutesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#7b1fa2",
        },
        headerTintColor: "#FFF",
      }}
    >
      <Stack.Screen name="login" />
    </Stack>
  );
}
