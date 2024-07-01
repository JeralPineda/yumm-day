import { Pressable, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { styled, useColorScheme } from "nativewind";

import { Icons } from "@/assets/icons";
import { Container } from "@/components/container";
import { ExpoRootProps } from "expo-router/build/ExpoRoot";

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

export default function MenuScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Container title="Menu">
      <Text
        className="text-neutral-900 dark:text-neutral-100 font-bold"
        onPress={() => {
          router.replace("(auth)/sign-in");
        }}
      >
        Sign Out
      </Text>
      <StyledPressable onPress={toggleColorScheme} className="mt-10">
        <StyledText className="dark:text-neutral-100">{`Try clicking me! ${
          colorScheme === "dark" ? "🌙" : "🌞"
        }`}</StyledText>
      </StyledPressable>

      <Icons name="menu-food-fill" size={30} color="#000" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />
      <View className="w-full h-40 bg-slate-500 mb-4" />

      <Text className="text-neutral-900 dark:text-neutral-100 font-bold">Hola soy jeral pineda</Text>
    </Container>
  );
}
