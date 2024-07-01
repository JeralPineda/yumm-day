import { Stack } from "expo-router";

const UsersScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Usuarios",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default UsersScreenLayout;
