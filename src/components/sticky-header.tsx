import React from "react";
import { useColorScheme } from "nativewind";
import { Platform, PlatformOSType, StyleSheet, Text, View } from "react-native";
import Animated, { StyleProps } from "react-native-reanimated";
import { BoldText } from "./typography/bold-text";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface StickyHeaderProps {
  title?: string;
  subtitle?: string;
  animationStyle: StyleProps;
}

export const StickyHeader = ({ title, subtitle, animationStyle }: StickyHeaderProps) => {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  const getBorderColorForHeader = (platform: PlatformOSType): string => {
    switch (platform) {
      case "ios":
        return colorScheme === "dark" ? "#34343424" : "#d0cdcd42";

      case "android":
        return colorScheme === "dark" ? "#343434a2" : "#d0cdcd42";

      default:
        return colorScheme === "dark" ? "#34343476" : "#d0cdcd42";
    }
  };

  return (
    <Animated.View
      className="justify-center items-center bg-backgroundLight/95 dark:bg-backgroundDark/95"
      style={[
        {
          left: 0,
          top: 0,
          right: 0,
          // zIndex: -1,
          // elevation: 1000,
          height: Platform.OS === "ios" ? 100 : 80,

          position: "absolute",
          borderBottomWidth: 0.5,
          borderBottomColor: getBorderColorForHeader(Platform.OS),
          // backgroundColor: "red",
        },
        animationStyle,
      ]}
    >
      <View className="flex-1 flex-row items-center" style={{ marginTop: Platform.OS === "ios" ? insets.top : 0 }}>
        {title && (
          <BoldText
          //
          // className="text-black dark:text-white"
          >
            {title}
          </BoldText>
        )}
        {subtitle && (
          <Text
            //
            className="text-black/60 dark:text-white/60 flex-wrap  text-sm"
          >
            {subtitle}
          </Text>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({});
