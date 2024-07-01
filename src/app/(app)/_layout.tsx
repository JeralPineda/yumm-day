import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={
        {
          // headerShown: true,
        }
      }
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/modal"
        options={{
          presentation: "formSheet",
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
}
