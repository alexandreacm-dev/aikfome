import React from "react";
import { Stack } from "expo-router";

export default function AuthRoutesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7b1fa2",
        },
        headerTintColor: "#FFF",
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "AikFome Home",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "AikFome profile",
        }}
      />
    </Stack>
  );
}
