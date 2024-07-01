import { Container } from "@/components/container";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function UsersScreen() {
  return (
    <Container title="Usuarios">
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.separator} />
    </Container>
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
