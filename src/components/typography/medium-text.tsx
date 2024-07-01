import { Text } from "react-native";
import { CustomTextProps } from "../../types";

export function MediumText({ children, numberOfLines, style }: CustomTextProps) {
  return (
    <Text numberOfLines={numberOfLines} style={[{ fontFamily: "medium" }, style]}>
      {children}
    </Text>
  );
}
