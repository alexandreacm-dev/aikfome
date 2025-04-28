import React from "react";
import { Pressable, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
// import { Container } from './styles';

const CloseButton: React.FC = () => {
  return (
    <Pressable onPress={() => router.dismiss()}>
      <AntDesign name="closecircleo" size={22} color="#FFF" />
    </Pressable>
  );
};

export default CloseButton;
