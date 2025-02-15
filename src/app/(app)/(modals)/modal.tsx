import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Platform, StyleSheet, View } from "react-native";

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Link className="mt-4" href="../">
        Salir
      </Link>
      <View
        //
        style={styles.separator}
        // lightColor="#eee"
        // darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="app/modal.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
