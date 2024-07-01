import { useCallback, useEffect, useMemo, useRef } from "react";
import { Button, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useColorScheme } from "nativewind";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView, useBottomSheetTimingConfigs } from "@gorhom/bottom-sheet";
import { Easing } from "react-native-reanimated";

import { useUiStore } from "@/store/ui";
import Colors from "@/constants/Colors";

export default function ProfileBottomSheet() {
  const { colorScheme } = useColorScheme();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const isOpenButtomSheet = useUiStore((state) => state.isOpenButtomSheet);
  const onCloseButtomSheet = useUiStore((state) => state.onCloseButtomSheet);

  const snapPoints = useMemo(() => ["1%", "45%"], []);
  const blurIntensity = colorScheme === "dark" ? 50 : 15;

  // callbacks
  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1 || index === 0) {
      onCloseButtomSheet();
      handleClosePress();
    }
  }, []);
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 190,
    easing: Easing.exp,
  });

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        //
        style={{ backgroundColor: colorScheme === "dark" ? Colors.light.background : Colors.dark.background }}
        appearsOnIndex={1}
        opacity={0.5}
        disappearsOnIndex={isOpenButtomSheet ? -1 : 1}
        {...props}
      >
        <BlurView
          intensity={blurIntensity}
          tint={colorScheme === "dark" ? "light" : "dark"}
          style={{
            ...StyleSheet.absoluteFillObject,
            overflow: "hidden",
          }}
        />
      </BottomSheetBackdrop>
    ),
    [isOpenButtomSheet, colorScheme]
  );

  useEffect(() => {
    if (isOpenButtomSheet) {
      handleOpenPress();
    }
  }, [isOpenButtomSheet]);

  return (
    <BottomSheet
      //

      index={0}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}
      // style={{ backgroundColor: colorScheme === "dark" ? Colors.light.background : Colors.dark.background }}
      // enablePanDownToClose={true}
      handleIndicatorStyle={{ backgroundColor: Colors[colorScheme].text, width: 40 }}
      backgroundStyle={{ backgroundColor: Colors[colorScheme].background, borderRadius: 30 }}
      backdropComponent={renderBackdrop}
      animationConfigs={animationConfigs}
    >
      <BottomSheetView style={{ flex: 1, padding: 14 }}>
        <Text>Awesome 🎉</Text>

        <Button title="cerrar" onPress={handleClosePress} />
      </BottomSheetView>
    </BottomSheet>
  );
}
