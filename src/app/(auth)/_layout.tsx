import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <Stack
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: theme.BACKGROUND_COLOR,
          // },
          // headerShadowVisible: false,
          // headerBackVisible: false,
          // headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
