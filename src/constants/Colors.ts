const tintColorLight = "#000000";
const tintColorDark = "rgb(245 245 245)";
const primary = "rgb(124 59 58)";
const secondary = "rgb(209 114 110)";

export default {
  light: {
    text: "rgb(10 10 10)",
    background: "rgb(245 245 245)",
    tint: tintColorLight,
    tabIconDefault: "rgb(82, 82, 82)",
    tabIconSelected: "rgb(10 10 10)",
    primary,
    secondary,
    bgButtomSheet: "rgba(245, 245, 245, 1)",
    bgContainerButtomSheet: "rgba(0,0,0,0.5)",
  },
  dark: {
    text: " rgb(245 245 245)",
    background: "#000000",
    tint: tintColorDark,
    tabIconDefault: "rgb(163, 163, 163)",
    tabIconSelected: "rgb(245, 245, 245)",
    primary,
    secondary,
    bgButtomSheet: "rgba(5,5,5,1)",
    bgContainerButtomSheet: "rgba(0,0,2,0.5)",
  },
};
