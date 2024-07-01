import { Platform } from "react-native";
import {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export const useScrollAnimation = (height: number = 100) => {
  const traslationY = useSharedValue(height);
  const scrollDirection = useSharedValue("up");
  const isScrolling = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag: () => {
      isScrolling.value = true;
    },
    onEndDrag: (event) => {
      const velocity = event.velocity?.y;

      isScrolling.value = false;

      if (velocity && velocity > 0 && scrollDirection.value === "down") isScrolling.value = true;
    },
    onScroll: (event) => {
      const offsetY = event.contentOffset.y;
      const previousY = traslationY.value;

      if (offsetY > previousY) scrollDirection.value = "down";
      else scrollDirection.value = "up";

      traslationY.value = offsetY;
    },
  });

  const headerStyleIOS = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          scrollDirection.value !== "down" && !isScrolling.value
            ? withSpring(
                interpolate(
                  traslationY.value,
                  [0, scrollDirection.value === "down" ? height : -height],
                  [0, -height],
                  Extrapolation.CLAMP
                ),
                {
                  damping: scrollDirection.value === "down" ? 5 : 20,
                  stiffness: 80,
                }
              )
            : withTiming(-height, { duration: 600 }),
      },
    ],
  }));

  const headerStyleAndroid = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(
          interpolate(
            traslationY.value,
            [0, scrollDirection.value === "down" ? traslationY.value : -traslationY.value],
            [0, scrollDirection.value === "down" ? -height : height],
            Extrapolation.CLAMP
          )
        ),
      },
    ],
  }));

  return {
    scrollHandler,
    headerStyleAndroid,
    headerStyleIOS,
  };
};
