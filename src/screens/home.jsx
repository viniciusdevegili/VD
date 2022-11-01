import { Button, Image, StyleSheet, Text, View } from "react-native";

export const Home = ({ navigation }) => (
  <View>
    <Text>APPLE</Text>
    <Image
      source={{
        uri: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202210251425",
      }}
      style={styles.imagem}
    ></Image>
    <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
    <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
    <Button title="Notícias" onPress={() => navigation.navigate("Noticias")} />
    <Button title="Produtos" onPress={() => navigation.navigate("Produtos")} />
  </View>
);

const styles = StyleSheet.create({
  imagem: {
    width: 80,
    height: 80,
  },
});
