import { Text } from "react-native";
import { CustomTextProps } from "../../types";

export function NeutralText({ children, numberOfLines, style }: CustomTextProps) {
  return (
    <Text numberOfLines={numberOfLines} style={[{ fontFamily: "regular" }, style]}>
      {children}
    </Text>
  );
}
