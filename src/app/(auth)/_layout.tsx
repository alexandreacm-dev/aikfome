import React from "react";
import { Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import theme from "@/styles";
import CloseButton from "@/components/BackButton";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

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
        name="home/index"
        options={{
          headerTitle: "AIKFOME",
        }}
        redirect={!isSignedIn}
      />
      <Stack.Screen
        name="details-store/index"
        options={{
          headerTitle: "",
        }}
        redirect={!isSignedIn}
      />
      <Stack.Screen
        name="search-address/index"
        options={{
          headerTitle: "ENDEREÇO DE ENTREGA",
          presentation: "modal",
          headerLeft: () => <CloseButton />,
        }}
        redirect={!isSignedIn}
      />
      <Stack.Screen
        name="favorites/index"
        options={{
          headerTitle: "FAVORITOS",
          presentation: "modal",
          headerLeft: () => <CloseButton />,
        }}
        redirect={!isSignedIn}
      />
    </Stack>
  );
}
