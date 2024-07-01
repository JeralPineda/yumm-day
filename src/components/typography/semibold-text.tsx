import { CustomTextProps } from "@/types";
import { Text } from "react-native";

export function SemiboldText({ children, style, numberOfLines, className }: CustomTextProps) {
  return (
    <Text className={className} numberOfLines={numberOfLines} style={[{ fontFamily: "semiBold" }, style]}>
      {children}
    </Text>
  );
}
