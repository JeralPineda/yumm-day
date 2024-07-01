import { View, Text } from "react-native";
import React from "react";
import { Icons } from "@/assets/icons";
import { useColorScheme } from "nativewind";

export default function Logo({ size }: { size: number }) {
  const { colorScheme } = useColorScheme();

  return <Icons name="logo" size={size} color={colorScheme === "dark" ? "#fff" : "#000"} />;
}
