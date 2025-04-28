import React from "react";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useClerk } from "@clerk/clerk-expo";
import theme from "@/styles";

const LogOutButton: React.FC = () => {
  const { signOut } = useClerk();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }

  return (
    <Pressable onPress={handleSignOut}>
      <MaterialIcons
        name="exit-to-app"
        size={26}
        color={theme.colors.text.textWhite}
      />
    </Pressable>
  );
};

export default LogOutButton;
