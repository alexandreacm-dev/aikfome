import React from "react";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAuth, useClerk } from "@clerk/clerk-expo";

// import { Container } from './styles';
type Props = {
  onPress?: () => void;
};

const LogOutButton: React.FC<Props> = ({ onPress }) => {
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
      <MaterialIcons name="exit-to-app" size={24} color="white" />
    </Pressable>
  );
};

export default LogOutButton;
