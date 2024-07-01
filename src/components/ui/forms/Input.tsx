/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef } from "react";
import { Controller } from "react-hook-form";
// import {Input, Layout, Text} from "@ui-kitten/components"t
import { ProductInputProps } from "../../../../types/form";

export default function FormInput({
  control,
  label,
  name,
  type = "default",
  rules,
  defaultValue,
  multiline = false,
  numberOfLines = 0,
  styleInput,
}: ProductInputProps) {
  const inputRef = useRef(null);

  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
        <View style={{ ...styleInput, marginVertical: 5 }}>
          <TextInput
            label={label}
            textStyle={styles.inputStyled}
            placeholder={label}
            status={error ? "danger" : "basic"}
            value={value}
            onChangeText={(text) => {
              onChange(text);
            }}
            onBlur={onBlur}
            keyboardType={type === "numeric" ? type : "default"}
            spellCheck={false}
            autoCorrect={false}
            returnKeyType="done"
            autoCapitalize="none"
            ref={inputRef}
            multiline={multiline ?? undefined}
            numberOfLines={multiline ? numberOfLines : undefined}
          />

          {error && <Text style={styles.errorMessage}>{error?.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputStyled: {
    // paddingVertical: Platform.OS === "ios" ? 6 : 2,
  },
  textLabel: {
    fontSize: 12,
    marginLeft: 10,
    color: "#919191",
  },
  errorMessage: {
    marginVertical: 10,
    color: "#CF3341",
    textAlign: "left",
    marginLeft: 20,
  },
});
