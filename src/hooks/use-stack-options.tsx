import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useColorScheme } from "nativewind";
import Colors from "@/constants/Colors";
import { Platform } from "react-native";

export const useStackOptions = () => {
  const { colorScheme } = useColorScheme();

  const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    // headerLargeTitle: true,
    // headerLargeStyle: {
    //   backgroundColor: Colors[colorScheme].background,
    // },
    // headerLargeTitleStyle: {
    //   color: Colors[colorScheme].text,
    // },
    // headerStyle:
    //   Platform.OS === "ios"
    //     ? undefined
    //     : {
    //         backgroundColor: Colors[colorScheme].background,
    //       },
    // headerTintColor: Colors[colorScheme].text,
    // headerTransparent: Platform.OS === "ios",
    // headerBlurEffect: colorScheme,
    // headerShadowVisible: false,
  };

  return {
    StackScreenWithSearchBar,
  };
};
