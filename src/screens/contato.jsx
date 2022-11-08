import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const VDcontato = () => {
    const [Email, setEmail] = useState('');
    const [Nome, setNome] = useState('');
    const [Contato, setContato] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                label="Nome"
                mode="outlined"
                value={Nome}
                onChangeText={(Nome) => setNome(Nome)}
            />
             <TextInput
                style={styles.input}
                label="Contato"
                mode="outlined"
                value={Contato}
                onChangeText={(Contato) => setContato(Contato)}
            />
             <TextInput
                style={styles.input}
                label="Email"
                mode="outlined"
                value={Email}
                onChangeText={(Email) => setEmail(Email)}
            />
            <Button mode="contained" onPress={() => navigation.navigate('home')}>
        Enviar
  </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default VDcontato;