import React from "react";
import { IconsProps } from "@/types";
import IconGoogle from "./IconGoogle";
import IconApple from "./IconApple";
import IconLogo from "./IconLogo";
import IconUserOutline from "./IconUserOutline";
import IconUserFill from "./IconUserFill";
import IconHomeOutline from "./IconHomeOutline";
import IconHomeFill from "./IconHomeFill";
import IconMenuFoodOutline from "./IconMenuFoodOutline";
import IconMenuFoodFill from "./IconMenuFoodFill";

export const Icons = ({ name, color, size, style }: IconsProps) => {
  switch (name) {
    case "logo":
      return <IconLogo name={name} color={color} size={size} {...(style as object)} />;

    case "google":
      return <IconGoogle name={name} color={color} size={size} {...(style as object)} />;

    case "apple":
      return <IconApple name={name} color={color} size={size} {...(style as object)} />;

    case "user-outline":
      return <IconUserOutline name={name} color={color} size={size} {...(style as object)} />;

    case "user-fill":
      return <IconUserFill name={name} color={color} size={size} {...(style as object)} />;

    case "home-outline":
      return <IconHomeOutline name={name} color={color} size={size} {...(style as object)} />;

    case "home-fill":
      return <IconHomeFill name={name} color={color} size={size} {...(style as object)} />;

    case "menu-food-outline":
      return <IconMenuFoodOutline name={name} color={color} size={size} {...(style as object)} />;

    case "menu-food-fill":
      return <IconMenuFoodFill name={name} color={color} size={size} {...(style as object)} />;

    default:
      return null;
  }
};
