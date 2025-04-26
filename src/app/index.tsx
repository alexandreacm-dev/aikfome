import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import aikfomeVideo from "@/assets/images/splash.mp4";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import theme from "@/styles/light";
import Text from "@/components/Text";
import aikfomeLogo from "@/assets/images/aikfome-logo.svg";
import { router } from "expo-router";

const AnimatedSplash: React.FC = () => {
  const useRefInterval = useRef(0);

  useEffect(() => {
    useRefInterval.current = setTimeout(() => {
      router.replace("/(public)/sign-in");
    }, 2000);

    return () => clearInterval(useRefInterval.current);
  }, []);

  // const player = useVideoPlayer(aikfomeVideo, (player) => {
  //   player.loop = false;
  //   player.play();
  // });

  // const { isPlaying } = useEvent(player, "playingChange", {
  //   isPlaying: player.playing,
  // });

  function onPlaybackStatus(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (status.didJustFinish) {
        router.replace("/(public)/sign-in");
      }
    }
  }

  return (
    <>
      <View style={styles.container} />
      <View style={styles.containerText}>
        <Image
          source={aikfomeLogo}
          style={{
            width: 220,
            height: 50,
            tintColor: theme.colors.text.textWhite,
          }}
        />

        <Text
          type="subTitle"
          style={{ color: theme.colors.text.textWhite, marginTop: 20 }}
        >
          Comida, bebida, mercado e muito mais no aplicativo de delivery do
          interior
        </Text>
      </View>

      <Video
        isLooping
        style={[StyleSheet.absoluteFill]}
        resizeMode={ResizeMode.COVER}
        onPlaybackStatusUpdate={onPlaybackStatus}
        source={aikfomeVideo}
        shouldPlay={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    opacity: 0.8,
    backgroundColor: theme.colors.bg.bg_primary,
    zIndex: 1,
  },
  containerText: {
    flex: 3,
    padding: 10,
    zIndex: 2,
    opacity: 0.8,
    backgroundColor: theme.colors.bg.bg_primary,
    alignItems: "center",
  },
});

export default AnimatedSplash;
