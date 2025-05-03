import React, { useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import Text from "@/components/Text";
import aikfomeLogo from "@/assets/images/aikfome-logo.svg";

import AnimatedLogo from "@/components/AnimatedLogo";
import AnimatedLogoText from "@/components/AnimatedLogoText";

import theme from "@/styles";
import * as S from "./styles";

const SignUp: React.FC = () => {
  const { signUp, setActive, isLoaded } = useSignUp();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const handleSignUp = async () => {
    if (!isLoaded) return;

    setLoading(true);

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      Alert.alert(err.errors[0].message);
      setLoading(false);
      // console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleVerifyCode = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status == "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.navigate("/");
      }
    } catch (err: any) {
      // console.error(JSON.stringify(err, null, 2));
      const { code, message, longMessage } = err.errors[0];
      console.log(message);

      Alert.alert("Código de verificação inválido");
    }
  };

  if (pendingVerification) {
    return (
      <S.Container>
        <Text style={{ marginBottom: 10 }} type="defaultSemiBold">
          Verifique seu e-mail
        </Text>
        <S.ContainerInput>
          <S.Input
            value={code}
            placeholder="Enter your verification code"
            onChangeText={setCode}
          />
        </S.ContainerInput>
        <S.PressableButton onPress={handleVerifyCode}>
          <Text style={{ color: theme.colors.bg.secondary }} type="default">
            Verificar
          </Text>
        </S.PressableButton>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ContainerLogo>
        <AnimatedLogo />
        <AnimatedLogoText source={aikfomeLogo} />
      </S.ContainerLogo>
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

        <S.PressableButton onPress={handleSignUp}>
          {isLoading ? (
            <ActivityIndicator size="small" color={theme.colors.bg.secondary} />
          ) : (
            <Text type="default" style={{ color: theme.colors.text.textWhite }}>
              Criar Conta
            </Text>
          )}
        </S.PressableButton>

        <S.ContainerBottom>
          <Text type="default">Já tem uma conta</Text>
          <Link href="/sign-in">
            <Text type="link">Logar</Text>
          </Link>
        </S.ContainerBottom>
      </S.ContainerFormInput>
    </S.Container>
  );
};

export default SignUp;
