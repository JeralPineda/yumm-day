import { Text } from "react-native";
import { CustomTextProps } from "../../types";

export function LightText({ children, numberOfLines, style }: CustomTextProps) {
  return (
    <Text numberOfLines={numberOfLines} style={[{ fontFamily: "light" }, style]}>
      {children}
    </Text>
  );
}
