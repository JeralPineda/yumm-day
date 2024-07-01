import { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

export function BoldText({
  children,
  style,
  numberOfLines,
}: {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}) {
  return (
    <Text
      className="text-black dark:text-neutral-100 text-lg"
      numberOfLines={numberOfLines}
      style={[{ fontFamily: "bold" }, style]}
    >
      {children}
    </Text>
  );
}
