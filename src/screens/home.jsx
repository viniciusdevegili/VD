import { Button, Image, StyleSheet, Text, View } from "react-native";

export const VDhome = ({ navigation }) => (
  <View>
    <br></br>
    <center><Text><b>APPLE</b></Text>
    </center>
    <center><Image
      source={{
        uri: "https://www.transparentpng.com/thumb/apple-logo/12znKl-apple-logo-free-download.png",
      }}
      style={styles.imagem}
    ></Image>
    </center>
    <Button title="Sobre" onPress={() => navigation.navigate("sobre")} />
    <Button title="contato" onPress={() => navigation.navigate("contato")} />
    <Button title="Notícias" onPress={() => navigation.navigate("noticias")} />
    <Button title="Produtos" onPress={() => navigation.navigate("produtos")} />
  </View>
);

const styles = StyleSheet.create({
  imagem: {
    width: 100,
    height: 100,
  },
});

