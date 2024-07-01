import { IconsProps } from "@/types";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconHomeOutline = (props: IconsProps) => (
  <Svg
    width={props.size ?? 36}
    height={props.size ?? 39}
    viewBox="0 0 36 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.5 5.6c-3.8 3-7.6 6.2-8.2 7.1-.9 1.1-1.3 5.7-1.3 14V39h14.9l.3-6.2c.3-6 .4-6.3 2.8-6.3s2.5.3 2.8 6.3l.3 6.2H36V13.2l-8.2-6.6C23.2 3 18.8 0 18 0s-4.6 2.5-8.5 5.6M25 9.5c3.7 3.1 7.1 6.3 7.4 7.1.3.9.6 5.6.6 10.5V36h-8.9l-.3-6.3-.3-6.2h-11l-.3 6.2-.3 6.3H3v-9.3c0-5.9.5-9.9 1.3-11C5.3 14.2 17 4.2 17.8 4.1 18 4 21.2 6.5 25 9.5"
      fill={props.color ?? "#000"}
    />
  </Svg>
);
export default IconHomeOutline;
