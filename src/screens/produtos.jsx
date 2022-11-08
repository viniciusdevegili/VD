import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
export const VDprodutos = () => (
    <ScrollView>
  <View>
    <br></br>
    <center><Text><b>APPLE IPHONE 13 128GB</b></Text>
    <br></br>
    <br></br>
    <Image
      source={{
        uri: "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png",
      }}
      style={styles.imagem}
    ></Image>
    <Text>R$ 2999,90</Text>
    <br></br>
    <br></br>
    <button style={button}>Comprar</button>
    </center>
    <br></br>
    <center><Text><b>APPLE IPHONE 8 64GB</b></Text>
    <br></br>
    <br></br>
    <Image
      source={{
        uri: "https://imgs.casasbahia.com.br/1544579480/1xg.jpg?imwidth=292",
      }}
      style={styles.imagem}
    ></Image>
    <Text>R$ 1999,90</Text>
    <br></br>
    <br></br>
    <button style={button}>Comprar</button>
    </center>
    <br></br>
    <center><Text><b>APPLE IPHONE 11 256GB</b></Text>
    <br></br>
    <br></br>
    <Image
      source={{
        uri: "https://http2.mlstatic.com/D_NQ_NP_764016-MLA46114648009_052021-O.jpg",
      }}
      style={styles.imagem}
    ></Image>
    <Text>R$ 2499,90</Text>
    <br></br>
    <br></br>
    <button style={button}>Comprar</button>
   <br></br>
   <br></br>
    </center>
  </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  imagem: {
    width: 250,
    height: 250,
  },
});

const button = {
    color: "purple"
}