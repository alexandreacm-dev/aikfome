import React, { useState } from "react";
import { Alert, useWindowDimensions } from "react-native";
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
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!isLoaded) return;

    try {
      const signInCompleted = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInCompleted.status === "complete") {
        await setActive({ session: signInCompleted.createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      Alert.alert(err.errors[0].message);
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
      <S.ContainerForm animation="fadeInDown" duration={1000}>
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
            <Text type="default" style={{ color: theme.colors.text.textWhite }}>
              Continue
            </Text>
          </S.PressableButton>

          <S.ContainerBottom>
            <Text type="default">Ainda não tem uma conta</Text>
            <Link href="/sign-up">
              <Text type="link">Nova Conta</Text>
            </Link>
          </S.ContainerBottom>
        </S.ContainerFormInput>
      </S.ContainerForm>
    </S.Container>
  );
}
