import { Stack } from "expo-router";

const HomeScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Inicio",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default HomeScreenLayout;
