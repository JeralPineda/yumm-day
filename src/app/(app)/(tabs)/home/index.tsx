import { Container } from "@/components/container";
import { capitalizeFirstLetter, getFirsAndLastName } from "@/lib/util";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const userName = "jeral pineda";
  const getUserName = getFirsAndLastName(userName);

  return (
    <Container title="Hola, " subtitle={capitalizeFirstLetter(getUserName)}>
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
