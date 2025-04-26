import React, { useEffect } from "react";
import { Stack } from "expo-router";
import LogoutButton from "@/components/LogoutButton";
import { useAuth } from "@clerk/clerk-expo";
import theme from "@/styles";
import HeaderLocation from "@/components/HeaderLocation";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
        headerTintColor: theme.colors.bg.secondary,
        headerLeft: () => <HeaderLocation />,
        headerRight: () => <LogoutButton />,
      }}
    >
      <Stack.Screen name="home/index" redirect={!isSignedIn} />
      <Stack.Screen
        name="store-details"
        options={{
          headerTitle: "",
        }}
        redirect={!isSignedIn}
      />
    </Stack>
  );
}
