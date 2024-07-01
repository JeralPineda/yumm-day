import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsProps } from "@/types";

const IconUserOutline = (props: IconsProps) => (
  <Svg
    width={props.size ?? 32}
    height={props.size ?? 40}
    viewBox="0 0 32 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.6 2.6C6.5 4.7 6 6.2 6 10c0 6.6 3.4 10 10 10 3.8 0 5.3-.5 7.4-2.6 3.7-3.8 3.7-11 0-14.8C21.3.5 19.8 0 16 0s-5.3.5-7.4 2.6m11.6 3.1c2.2 2 2.3 6.1.1 8.5-3.4 3.8-10.3 1.1-10.3-4 0-5.4 6.2-8.1 10.2-4.5M.7 24.6c-.4.4-.7 2.6-.7 4.9C0 36.4 5.5 40 16.1 40c10.8 0 16.2-3.8 15.7-11.1l-.3-4.4-15.1-.3c-8.2-.1-15.3.1-15.7.4m27.5 4.9c-.7 4.1-3.8 5.9-10.9 6.3-4.3.2-7.7-.2-9.3-1-2.6-1.4-5.2-5.6-4.4-7 .3-.5 6-.7 12.7-.6 11.6.3 12.2.4 11.9 2.3"
      fill={props.color ?? "#000"}
    />
  </Svg>
);
export default IconUserOutline;
