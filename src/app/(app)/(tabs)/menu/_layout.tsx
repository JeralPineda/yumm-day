import { Stack } from "expo-router";
// import { useStackOptions } from "@/hooks/use-stack-options";

const MenuScreenLayout = () => {
  // const { StackScreenWithSearchBar } = useStackOptions();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        initialParams={{ title: "Menu" }}
        options={{
          // ...StackScreenWithSearchBar,
          headerTitle: "Menu",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default MenuScreenLayout;
