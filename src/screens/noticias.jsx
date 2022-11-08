import { Button, Image, ScrollViewBase, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
export const VDnoticias = () => (
<ScrollView>
<View>
    <br></br>
    <center><Text><b>APPLE IPHONE 14</b></Text></center>
    <br></br>
    <Text style={texto}>A Apple pode ter cortado a produção do iPhone 14 após o aparelho entregar uma demanda abaixo do esperado. 
        De acordo com informações compartilhadas pela Bloomberg, o comunicado da empresa de Cupertino já foi enviado aos seus fornecedores.
        Com isso, ao invés de entregar 90 milhões de unidades dos iPhone 14 e 14 Plus, as fabricantes agora tem a missão de produzir cerca de 87 milhões. 
        Ou seja, uma redução de 3 milhões de aparelhos.</Text>
    <br></br>
    <br></br>
    <center>
    <Image
      source={{
        uri: "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png",
      }}
      style={styles.imagem}
    ></Image>
    </center>
    <br></br>
    <center><Text><b>APPLE WATCH</b></Text></center>
    <br></br>
    <Text style={texto}>A temporada de ofertas da Black Friday 2022 está a todo vapor, e quem está em busca de um Apple Watch tem uma boa oportunidade para comprar o desejado smartwatch (relógio inteligente) da empresa da maçãzinha. Na Amazon, os Apple Watch SE e o Series 7 estão com descontos que chegam a R$ 1.600, uma economia interessante, considerando o alto valor desses smartwaches</Text>
    <br></br>
    <br></br>
    <center>
    <Image
      source={{
        uri: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1661473979891",
      }}
      style={styles.imagem}
    ></Image>
    </center>
    <br></br>
    <center><Text><b>IPHONE É O PRODUTO MAIS DESEJADO PARA A BLACKFRIDAY 2022</b></Text></center>
    <br></br>
    <Text style={texto}>Uma pesquisa realizada pelo Pelando, site de compras com promoções e cupons de descontos, revelou que eletrônicos são os produtos mais desejados pelos brasileiros nesta Black Friday, que acontece no dia 25 de novembro.

O levantamento, realizado com mais de 1.600 consumidores de todas as regiões do país, em setembro, mostra que 57,40% dos consumidores pretendem gastar mais do que na edição passada, que rendeu ao e-commerce brasileiro um faturamento de R$ 4,2 bilhões, conforme relatório da NielsenIQ Ebit..</Text>
    <br></br>
    <br></br>
    <center>
    <Image
      source={{
        uri: "https://cf.shopee.com.br/file/6570092a2c7b8f8c635858e6abbb1cc4",
      }}
      style={styles.imagem}
    ></Image>
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
const texto = {
    textAlign: "center"
}
