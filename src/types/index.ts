import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IconsProps {
  name:
    | "logo"
    | "google"
    | "apple"
    | "user-outline"
    | "user-fill"
    | "home-outline"
    | "home-fill"
    | "menu-food-outline"
    | "menu-food-fill";
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  xmlns?: string;
}

export interface CustomTextProps {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  className?: string;
}
