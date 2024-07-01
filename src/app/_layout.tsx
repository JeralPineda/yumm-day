import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import ProfileBottomSheet from "@/components/profile-bottom-sheet";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    light: require("@/assets/fonts/source-sans/SourceSans3-Light.ttf"),
    regular: require("@/assets/fonts/source-sans/SourceSans3-Regular.ttf"),
    semiBold: require("@/assets/fonts/source-sans/SourceSans3-SemiBold.ttf"),
    bold: require("@/assets/fonts/source-sans/SourceSans3-Bold.ttf"),
    medium: require("@/assets/fonts/source-sans/SourceSans3-Medium.ttf"),
  });

  const { colorScheme } = useColorScheme();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Set up the auth context and render our layout inside of it.
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <RootNavigation />
        </ThemeProvider>

        <ProfileBottomSheet />

        <StatusBar translucent={true} animated style={colorScheme === "light" ? "dark" : "light"} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
    </Stack>
  );
};
