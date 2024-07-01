// import { useSession } from "@/context/ctx";
import { router } from "expo-router";
import { Button, Image, Keyboard, ScrollView, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginInput from "@/components/ui/forms/login-input";
import { LoginSchema } from "@/lib/validators/login";
import { SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moderateScale } from "@/lib/metrics";
import { IconLogo } from "@/assets/icons/IconLogo";
import { Icons } from "@/assets/icons";

interface LoginFormData {
  username: string;
  password: string;
}

export default function SignIn() {
  // const { signIn } = useSession();

  const { control, handleSubmit, setValue, watch } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const { username } = watch();

  const onSubmit = (data: LoginFormData) => {
    console.log("🚀 sign-in.tsx -> #22 -> data ~", JSON.stringify(data, null, 2));
    // signIn();
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace("/");
    // Here you can perform further actions with the form data, like sending it to a server
  };

  return (
    <KeyboardAwareScrollView
      //
      style={{ flex: 1, width: "100%" }}
      alwaysBounceVertical={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        // alignItems: "center",
        // marginTop: "auto",
        // marginBottom: "auto",
        // paddingTop: moderateScale(25),
        // paddingHorizontal: moderateScale(20),
      }}
    >
      <View className="flex-1 justify-center items-center bg-neutral-950">
        <View className="flex-1 justify-center items-center w-full p-5">
          {/* <Image
            style={{
              resizeMode: "contain",
              width: moderateScale(350),
              height: moderateScale(200),
              // marginLeft: -moderateScale(10),
            }}
            source={require("@/assets/Frame 4.webp")}
          /> */}
          <Icons name="logo" size={300} color="#fff" />
          <Text className="text-center font-bold text-2xl">Login</Text>
          <LoginInput
            //
            control={control}
            label="Usuario"
            name="username"
            rules={{ required: "Usuario es requerido" }}
          />
          <LoginInput
            //
            control={control}
            label="Contraseña"
            name="password"
            type="password"
            rules={{ required: "Usuario es requerido" }}
            username={username}
          />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
