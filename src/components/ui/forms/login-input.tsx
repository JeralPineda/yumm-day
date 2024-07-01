import { View, Text, Pressable, TextInput, StyleSheet, Keyboard } from "react-native";
import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { LoginInputProps } from "@/types/form";
import Ionicons from "@expo/vector-icons/Feather";
import clsx from "clsx";

export default function LoginInput({ control, label, name, type, rules, handleSubmit, username }: LoginInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef<TextInput | null>(null);

  const handleSubmitting = (text: string) => {
    if (username && text) {
      handleSubmit && handleSubmit();
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) =>
        type !== "password" ? (
          <>
            <Pressable className="w-full py-2" onPress={() => inputRef.current && inputRef.current.focus()}>
              <View className="bg-zinc-100 flex-row h-[60px]  rounded-lg relative">
                <View className="flex-1 p-1 ">
                  <Text
                    //
                    className={
                      !isFocus && !value
                        ? "absolute top-[22px] text-zinc-400 px-3"
                        : "absolute top-3 text-zinc-400 px-3"
                    }
                  >
                    {label}
                  </Text>
                  <View className="flex-1 mt-4">
                    <TextInput
                      className="flex-1 px-2 justify-center items-center"
                      style={styles.inputStyled}
                      value={value}
                      spellCheck={false}
                      autoCorrect={false}
                      keyboardType="email-address"
                      returnKeyType="done"
                      autoCapitalize="none"
                      onChangeText={(text) => {
                        onChange(text);
                      }}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => {
                        setIsFocus(false);
                        onBlur();
                      }}
                      ref={inputRef}
                      // Add other TextInput props as needed
                    />
                  </View>
                </View>
              </View>
            </Pressable>
            {error && <Text style={styles.errorMessage}>{error?.message}</Text>}
          </>
        ) : (
          <>
            <Pressable className="w-full py-2" onPress={() => inputRef.current && inputRef.current.focus()}>
              <View className="bg-zinc-100 flex-row h-[60px]  rounded-lg relative">
                <View className="flex-1 p-1 ">
                  <Text
                    className={
                      !isFocus && !value
                        ? "absolute top-[22px] text-zinc-400 px-3"
                        : "absolute top-3 text-zinc-400 px-3"
                    }
                  >
                    {label}
                  </Text>
                  <View className="flex-1 mt-4">
                    <TextInput
                      secureTextEntry={!showPassword}
                      onChangeText={(text) => {
                        onChange(text);
                      }}
                      className="flex-1 px-2 justify-center items-center"
                      style={styles.inputStyled}
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => {
                        setIsFocus(false);
                        onBlur();
                      }}
                      spellCheck={false}
                      autoCorrect={false}
                      returnKeyType="done"
                      autoCapitalize="none"
                      ref={inputRef}
                      onSubmitEditing={(event) => handleSubmitting(event.nativeEvent.text)}
                      // Add other TextInput props as needed
                    />
                  </View>
                </View>

                <View style={styles.iconContainer}>
                  <Ionicons
                    name={showPassword ? "eye" : "eye-off"}
                    style={styles.icon}
                    size={18}
                    onPress={() => setShowPassword((prev) => !prev)}
                  />
                </View>
              </View>
            </Pressable>
            {error && <Text style={styles.errorMessage}>{error?.message}</Text>}
          </>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  inputStyled: {
    fontSize: 14,
  },
  errorMessage: {
    color: "red",
    textAlign: "left",
    marginLeft: 10,
  },
  icon: {
    padding: 15,
    color: "#919191",
    backgroundColor: "transparent",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 10,
  },
});
