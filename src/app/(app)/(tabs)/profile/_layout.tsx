import { Stack } from "expo-router";

const ProfileScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Perfil",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProfileScreenLayout;
