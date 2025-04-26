import React, { useState } from "react";
import { ActivityIndicator, Alert, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import Text from "@/components/Text";

import aikfomeLogo from "@/assets/images/aikfome-logo.svg";
import logo from "@/assets/images/aikfome_logo.png";
import theme from "@/styles";
import { MotiView } from "moti";

import * as S from "./styles";

export default function SignIn() {
  const { width, height } = useWindowDimensions();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("admin@aikfome.com");
  const [password, setPassword] = useState("@aikfome");

  const handleSignIn = async () => {
    if (!isLoaded) return;

    setLoading(true);

    try {
      const signInCompleted = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInCompleted.status === "complete") {
        await setActive({ session: signInCompleted.createdSessionId });
        router.replace("/");
        setLoading(false);
      }
    } catch (err: any) {
      Alert.alert(err.errors[0].message);
      setLoading(false);
      // console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <S.Container>
      <S.ContainerLogo>
        <MotiView
          from={{
            opacity: 0,
            translateX: width,
          }}
          animate={{
            opacity: 1.6,
            translateX: 0,
          }}
          transition={{
            type: "spring",
          }}
        >
          <Image
            source={aikfomeLogo}
            style={{
              width: 150,
              height: 35,
              tintColor: theme.colors.text.textWhite,
            }}
          />
        </MotiView>
      </S.ContainerLogo>
      <MotiView
        style={{ flex: 2 }}
        from={{
          opacity: 0.6,
          translateY: height / 2,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: "timing",
        }}
      >
        <S.ContainerForm>
          <S.ContainerLogoForm>
            <S.Logo>
              <Image
                source={logo}
                style={{ width: 90, height: 90, borderRadius: "50%" }}
              />
            </S.Logo>
          </S.ContainerLogoForm>

          <S.ContainerFormInput>
            <S.ContainerInput>
              <S.Input
                autoCapitalize="none"
                value={emailAddress}
                placeholder="Enter email"
                onChangeText={setEmailAddress}
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <S.Input
                value={password}
                placeholder="Enter password"
                secureTextEntry={true}
                onChangeText={setPassword}
              />
            </S.ContainerInput>

            <S.PressableButton onPress={handleSignIn}>
              {isLoading ? (
                <ActivityIndicator
                  size="small"
                  color={theme.colors.bg.secondary}
                />
              ) : (
                <Text
                  type="default"
                  style={{ color: theme.colors.text.textWhite }}
                >
                  Continue
                </Text>
              )}
            </S.PressableButton>

            <S.ContainerBottom>
              <Text type="default">Ainda não tem uma conta</Text>
              <Link href="/sign-up">
                <Text type="link">Nova Conta</Text>
              </Link>
            </S.ContainerBottom>
          </S.ContainerFormInput>
        </S.ContainerForm>
      </MotiView>
    </S.Container>
  );
}
