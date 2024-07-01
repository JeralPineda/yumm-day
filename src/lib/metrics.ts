import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = width > 700 ? 600 : 375;
const guidelineBaseHeight = 1100;

const horizontalScale = (size: number) => {
  if (width > height) {
    return (width / guidelineBaseHeight) * size;
  } else {
    return (width / guidelineBaseWidth) * size;
  }
};
const verticalScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
const moderateScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, moderateScale, verticalScale };
