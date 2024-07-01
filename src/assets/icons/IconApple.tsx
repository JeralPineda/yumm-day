import { IconsProps } from "@/types";
import Svg, { Path } from "react-native-svg";

const IconApple = (props: IconsProps) => (
  <Svg
    width={props.size ?? 843}
    height={props.size ?? 1000}
    viewBox="0 0 843 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M824.666 779.304C809.543 814.241 791.643 846.4 770.903 875.967C742.632 916.275 719.484 944.175 701.645 959.669C673.992 985.1 644.363 998.124 612.636 998.865C589.859 998.865 562.39 992.384 530.416 979.236C498.337 966.15 468.856 959.669 441.9 959.669C413.629 959.669 383.309 966.15 350.878 979.236C318.398 992.384 292.232 999.235 272.226 999.914C241.801 1001.21 211.475 987.816 181.204 959.669C161.884 942.817 137.718 913.929 108.768 873.004C77.7075 829.302 52.1713 778.625 32.1657 720.849C10.7404 658.443 0 598.013 0 539.508C0 472.492 14.481 414.691 43.4863 366.254C66.2819 327.348 96.6082 296.658 134.564 274.128C172.519 251.597 213.531 240.116 257.696 239.382C281.862 239.382 313.552 246.857 352.934 261.548C392.204 276.288 417.419 283.763 428.475 283.763C436.74 283.763 464.751 275.023 512.238 257.597C557.144 241.437 595.044 234.746 626.092 237.382C710.225 244.172 773.433 277.337 815.469 337.089C740.224 382.68 703.003 446.536 703.744 528.453C704.423 592.26 727.571 645.357 773.063 687.516C793.68 707.084 816.704 722.207 842.32 732.947C836.765 749.058 830.901 764.489 824.666 779.304ZM631.709 20.0057C631.709 70.0171 613.438 116.713 577.02 159.934C533.07 211.315 479.911 241.005 422.265 236.32C421.53 230.32 421.105 224.006 421.105 217.37C421.105 169.359 442.005 117.978 479.121 75.9669C497.652 54.696 521.219 37.0095 549.798 22.9006C578.316 9.00229 605.29 1.31621 630.66 0C631.401 6.68575 631.709 13.3726 631.709 20.0057Z"
      fill={props.color ?? "#ffffff"}
    />
  </Svg>
);
export default IconApple;
