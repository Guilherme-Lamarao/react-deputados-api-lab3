import { Image, Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
    nome: string
    siglaPartido: string
    siglaUf: string
    urlFoto: string
}

export function Card({ nome, siglaPartido, siglaUf, urlFoto }: Props) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: urlFoto }} style={styles.foto} resizeMode="cover" />

            <View style={styles.info}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.detalhe}>Partido: {siglaPartido}</Text>
                <Text style={styles.detalhe}>UF: {siglaUf}</Text>
            </View>
        </View>
    )
}
