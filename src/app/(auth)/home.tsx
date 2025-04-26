import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Home: React.FC = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/(auth)/profile">Profile</Link>
    </View>
  );
};

export default Home;
