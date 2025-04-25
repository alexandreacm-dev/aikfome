import Text from "@/components/Text";
import React from "react";
import { View, StyleSheet } from "react-native";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text type="default">Nascemos no interior do Paraná,</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
