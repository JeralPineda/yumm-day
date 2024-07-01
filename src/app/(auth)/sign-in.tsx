import React, { useState } from "react";
import { Linking, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { account } from "@/lib/appwrite/config";
import { OAuthProvider } from "react-native-appwrite";

import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

//* client id web: 54442420294-vuueq211oj24kf8t78t1r0abvlkqcev7.apps.googleusercontent.com - secret : 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

//* client id ios: 54442420294-8e0714khr3bg3jc7vcp7jvgajqd578ao.apps.googleusercontent.com
//* client id android: 54442420294-k32fb2t86ull7ollt20gmcglm8sv893c.apps.googleusercontent.com

export default function SignIn() {
  // const { signIn } = useSession();

  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "4442420294-k32fb2t86ull7ollt20gmcglm8sv893c.apps.googleusercontent.com",
    iosClientId: "54442420294-8e0714khr3bg3jc7vcp7jvgajqd578ao.apps.googleusercontent.com",
    webClientId: "54442420294-vuueq211oj24kf8t78t1r0abvlkqcev7.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  const startSocialAuth = async () => {
    try {
      // dispatch(startAuthLoading());
      // dispatch(onChecking());

      const data = await account.createOAuth2Session(OAuthProvider.Google);
      // return Linking.openURL(`${data}`);

      const session = await account.getSession("current");

      // Provider information
      console.log(session.provider);
      console.log(session.providerUid);
      console.log(session.providerAccessToken);

      // console.log("🚀 sign-in.tsx -> #18 -> result ~", JSON.stringify(result, null, 2));

      // sessionStorage.setItem("chefLoggedIn", true);

      // dispatch(onAuthenticated());
      // dispatch(finishAuthLoading());
    } catch (error) {
      console.log("🚀 sign-in.tsx -> #22 -> error ~", JSON.stringify(error, null, 2));
      // dispatch(finishAuthLoading());
      // dispatch(
      //   setAuthErrorMessage({
      //     error: "Error al autenticarse",
      //     description: "Hubo un error con Social Auth",
      //   })
      // );
    }
  };

  return (
    <KeyboardAwareScrollView
      //
      style={{ flex: 1, width: "100%" }}
      alwaysBounceVertical={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}
    >
      <View className="flex-1 justify-center items-center bg-neutral-150 dark:bg-[#000]">
        <View className="flex-1 justify-center items-center w-full p-4">
          <Logo size={160} />
          <View className="w-full mt-2">
            <Button
              title="Continuar con Google"
              handlePress={promptAsync}
              intent="login2"
              rounded="small"
              modifiers="full-width"
              className="flex-row"
              size="x-large"
              loginIcon="google"
            />
            <Button
              title="Continuar con Apple"
              handlePress={() => console.log("login")}
              intent="login"
              rounded="small"
              modifiers="full-width"
              className="flex-row mt-2"
              size="x-large"
              loginIcon="apple"
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
