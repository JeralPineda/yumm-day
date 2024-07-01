import React, { ReactNode } from "react";
import { Platform } from "react-native";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { StickyHeader } from "./sticky-header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export const Container = ({ title, subtitle, children }: ContainerProps) => {
  const HEADER_HEIGHT = Platform.OS === "ios" ? 100 : 80;
  const { scrollHandler, headerStyleAndroid, headerStyleIOS } = useScrollAnimation(HEADER_HEIGHT);

  return (
    <View className="flex-1 bg-backgroundLight dark:bg-backgroundDark">
      {/* <SafeAreaView style={{ backgroundColor: "red", zIndex: 10 }} /> */}
      <Animated.ScrollView
        //
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: HEADER_HEIGHT }}
        style={{ height: "auto", alignSelf: "stretch", padding: 14 }}
        onScroll={scrollHandler}
      >
        {children}
      </Animated.ScrollView>
      <StickyHeader
        title={title}
        subtitle={subtitle}
        animationStyle={Platform.OS === "ios" ? headerStyleIOS : headerStyleAndroid}
      />
    </View>
  );
};
