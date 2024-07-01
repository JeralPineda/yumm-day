import { IconsProps } from "@/types";
import Svg, { Mask, Path, G } from "react-native-svg";

const IconGoogle = (props: IconsProps) => (
  <Svg
    width={props.size ?? 817}
    height={props.size ?? 817}
    viewBox="0 0 817 817"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      // style={{
      //   maskType: "luminance",
      // }}
      maskUnits="userSpaceOnUse"
      x={16}
      y={16}
      width={784}
      height={784}
    >
      <Path d="M16.932 16.933h782.952v782.954H16.932z" fill={props.color ?? "currentColor"} />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M134.374 16.933h548.068q2.881 0 5.763.14 2.879.142 5.748.423 2.87.285 5.722.707 2.853.423 5.679.985 2.827.564 5.625 1.263a119 119 0 0 1 5.554 1.538q2.76.836 5.473 1.808 2.716.97 5.38 2.074 2.661 1.104 5.269 2.336 2.608 1.234 5.148 2.593 2.544 1.36 5.016 2.84 2.473 1.483 4.871 3.084a116 116 0 0 1 9.256 6.867 115 115 0 0 1 4.365 3.765 116 116 0 0 1 8.15 8.15 115 115 0 0 1 3.765 4.365 117 117 0 0 1 6.866 9.255q1.602 2.4 3.085 4.871a120 120 0 0 1 5.433 10.164 120 120 0 0 1 2.335 5.27 115 115 0 0 1 2.074 5.38 117 117 0 0 1 4.61 16.651 118 118 0 0 1 1.691 11.402 118 118 0 0 1 .564 11.511v548.068q0 2.881-.14 5.763a117.5 117.5 0 0 1-3.378 22.774 117 117 0 0 1-3.347 11.027 115 115 0 0 1-2.074 5.38 120 120 0 0 1-2.335 5.269 120 120 0 0 1-2.593 5.15 121 121 0 0 1-2.84 5.014 119 119 0 0 1-6.403 9.583 116 116 0 0 1-3.548 4.544 115 115 0 0 1-3.765 4.365 117 117 0 0 1-12.515 11.915 116 116 0 0 1-9.256 6.866 119 119 0 0 1-4.871 3.085 119 119 0 0 1-10.164 5.433 120 120 0 0 1-5.269 2.335 115 115 0 0 1-5.38 2.074 115 115 0 0 1-5.473 1.809 121 121 0 0 1-5.554 1.538q-2.798.698-5.625 1.263-2.826.56-5.679.985-2.852.422-5.722.706-2.87.282-5.748.424-2.882.14-5.763.142H134.374q-2.882-.001-5.763-.142a119 119 0 0 1-5.748-.424q-2.87-.284-5.722-.706a120 120 0 0 1-5.68-.985 121 121 0 0 1-5.624-1.263 121 121 0 0 1-5.554-1.538q-2.761-.836-5.474-1.809a115 115 0 0 1-5.38-2.074 120 120 0 0 1-5.269-2.335 120 120 0 0 1-5.15-2.593 121 121 0 0 1-5.014-2.84 119 119 0 0 1-4.87-3.085 119 119 0 0 1-4.713-3.318 116 116 0 0 1-8.909-7.314 115 115 0 0 1-4.175-3.973 118 118 0 0 1-7.739-8.541 116 116 0 0 1-6.867-9.256 119 119 0 0 1-3.084-4.871 119 119 0 0 1-5.433-10.164q-1.232-2.608-2.336-5.269a116 116 0 0 1-2.074-5.38 114 114 0 0 1-1.808-5.473 119 119 0 0 1-1.538-5.554q-.699-2.798-1.264-5.625a117.3 117.3 0 0 1-2.255-22.912V134.375q0-2.882.141-5.763a118 118 0 0 1 1.13-11.47q.423-2.853.984-5.68.565-2.827 1.264-5.624a119 119 0 0 1 3.346-11.028 116 116 0 0 1 4.41-10.649 118 118 0 0 1 5.433-10.163q1.483-2.474 3.084-4.872a116 116 0 0 1 6.867-9.256 117 117 0 0 1 11.915-12.514 116 116 0 0 1 8.908-7.313 119 119 0 0 1 4.712-3.319q2.4-1.601 4.871-3.084 2.475-1.48 5.014-2.84 2.543-1.359 5.15-2.593 2.608-1.232 5.27-2.336 2.664-1.104 5.38-2.074a114 114 0 0 1 5.473-1.808q2.757-.836 5.554-1.538 2.797-.699 5.624-1.264 2.827-.561 5.68-.984t5.722-.707a118 118 0 0 1 11.511-.563"
        fill={props.color ?? "#fff"}
      />
    </G>
    <Path
      d="M607.205 628.616c68.816-64.227 99.399-171.271 81.049-273.729H414.525v113.162h155.979c-6.116 36.701-27.526 67.284-58.109 87.165z"
      fill="#4285F4"
    />
    <Path
      d="M154.56 538.392a294 294 0 0 0 16.662 28.683 294 294 0 0 0 19.792 26.62 293 293 0 0 0 22.668 24.219 295 295 0 0 0 12.323 11.11 293 293 0 0 0 40.451 28.916 293 293 0 0 0 29.432 15.299 293 293 0 0 0 15.318 6.377 293 293 0 0 0 15.652 5.503 292 292 0 0 0 15.94 4.61 293 293 0 0 0 49.019 8.339 293.8 293.8 0 0 0 66.208-1.942 294 294 0 0 0 48.448-11.198 293 293 0 0 0 30.944-11.949 291 291 0 0 0 14.916-7.264 293 293 0 0 0 28.486-16.997 293 293 0 0 0 26.386-20.102l-94.81-73.402c-81.047 53.521-215.618 33.642-261.496-91.754z"
      fill="#34A853"
    />
    <Path
      d="M250.899 463.46c-12.234-38.23-12.234-73.402 0-111.632l-96.34-74.932c-35.171 70.346-45.875 169.742 0 261.496z"
      fill="#FBBC02"
    />
    <Path
      d="M250.899 351.828c33.645-105.515 177.39-166.683 273.729-76.461l84.107-82.577C489.457 78.1 257.017 82.687 154.56 276.896z"
      fill="#EA4335"
    />
  </Svg>
);
export default IconGoogle;
