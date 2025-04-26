import React, { useEffect } from "react";
import { Stack } from "expo-router";
import LogoutButton from "@/components/LogoutButton";
import { useAuth } from "@clerk/clerk-expo";
import theme from "@/styles";
export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
        headerTintColor: theme.colors.bg.secondary,
        headerRight: () => <LogoutButton />,
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "AikFome",
        }}
        redirect={!isSignedIn}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "AikFome profile",
        }}
        redirect={!isSignedIn}
      />
    </Stack>
  );
}
