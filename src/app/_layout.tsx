import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { router, Slot, useSegments } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import { useGoogleFonts } from "@/hooks/useGoogleFonts";
import * as SplashScreen from "expo-splash-screen";
import ThemeProvider from "@/components/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LocationProvider from "@/contexts/location.context";
import { initializeStorage } from "@/storage/storage.service";
import { mmkvStorage } from "@/storage/mmKV.storage";
import StoreProvider from "@/contexts/store.context";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();
initializeStorage(mmkvStorage);

const InitialLayout = () => {
  const { fontLoaded, error } = useGoogleFonts();
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (fontLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error]);

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] == "(auth)";

    if (isSignedIn && !inAuthGroup) {
      router.replace("/(auth)/home");
    } else if (!isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn]);

  if (!fontLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <LocationProvider>
        <StoreProvider>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <Slot />
            </QueryClientProvider>
          </ThemeProvider>
        </StoreProvider>
      </LocationProvider>
    </>
  );
};

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
