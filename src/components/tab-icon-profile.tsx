import Colors from "@/constants/Colors";
import { getAvatarInitials } from "@/lib/util";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, Platform, PlatformOSType, StyleSheet, Text, View } from "react-native";

interface TabIconProfileProps {
  color: string;
  focused: boolean;
  size: number;
  hasAvatar: boolean;
  url?: string;
  userName?: string | undefined;
}

export const TabIconProfile = ({ color, focused, size, hasAvatar, userName, url }: TabIconProfileProps) => {
  const { colorScheme } = useColorScheme();

  const getSizeContainer = (platform: PlatformOSType): number => {
    switch (platform) {
      case "ios":
        return size * 1.2;

      case "android":
        return size * 1.2;

      default:
        return size * 1.2;
    }
  };

  const getSize = (platform: PlatformOSType): number => {
    switch (platform) {
      case "ios":
        return size;

      case "android":
        return size - 1;

      default:
        return size;
    }
  };

  const getThemeReverse = (theme: "light" | "dark"): "light" | "dark" => {
    const isDarkTheme = theme === "dark";

    switch (isDarkTheme) {
      case true:
        return "light";

      case false:
        return "dark";

      default:
        return "light";
    }
  };

  return (
    <>
      {hasAvatar ? (
        <View
          style={{
            width: getSizeContainer(Platform.OS),
            height: getSizeContainer(Platform.OS),
            borderColor: focused ? color : "transparent",
          }}
          className={"border-[1.4px] p-1 rounded-full justify-center items-center"}
        >
          <Image
            className="rounded-full"
            style={{
              resizeMode: "contain",
              width: getSize(Platform.OS),
              height: getSize(Platform.OS),
            }}
            source={require("@/assets/images/profile.png")}
          />
        </View>
      ) : (
        <View
          style={{
            width: getSizeContainer(Platform.OS),
            height: getSizeContainer(Platform.OS),
            borderColor: color,
            backgroundColor: focused ? color : "transparent",
          }}
          className={"border-[1.4px] p-1 rounded-full justify-center items-center"}
        >
          <Text
            className="font-semibold"
            style={{
              color: focused ? Colors[getThemeReverse(colorScheme)].text : color,
            }}
          >
            {getAvatarInitials(userName)}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({});
