import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { router, Slot, useSegments } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import { useGoogleFonts } from "@/hooks/useGoogleFonts";
import * as SplashScreen from "expo-splash-screen";
import ThemeProvider from "@/components/ThemeProvider";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const { fontLoaded, error } = useGoogleFonts();
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
      router.replace("/(public)/sign-in");
    }
  }, [isSignedIn]);

  if (!fontLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </ThemeProvider>
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
