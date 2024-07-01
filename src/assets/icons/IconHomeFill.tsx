import { IconsProps } from "@/types";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconHomeFill = (props: IconsProps) => (
  <Svg
    width={props.size ?? 36}
    height={props.size ?? 39}
    viewBox="0 0 36 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M33.5 39h-9a2.5 2.5 0 0 1-2.5-2.5v-9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 0 36.5V17.413a7.5 7.5 0 0 1 2.859-5.893L17.071.321a1.5 1.5 0 0 1 1.857 0L33.142 11.52A7.5 7.5 0 0 1 36 17.411V36.5a2.5 2.5 0 0 1-2.5 2.5"
      fill={props.color ?? "#000"}
    />
  </Svg>
);
export default IconHomeFill;
