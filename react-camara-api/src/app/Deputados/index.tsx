import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { api } from "@/services/api";
import { styles } from "./styles";

type Deputado = {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
};

export default function Deputados() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState("Toque no botão para consultar a API.");
  const [deputados, setDeputados] = useState<Deputado[]>([]);

  async function buscarDeputados() {
    setCarregando(true);
    setMensagem("Consultando a API...");
    setDeputados([]);

    try {
      const resposta = await api.get<{ dados: Deputado[] }>("/deputados", {
        params: { itens: 20, ordem: "ASC", ordenarPor: "nome" },
      });

      const dados = resposta.data.dados;

      setDeputados(dados);
      setMensagem(`Consulta concluída: ${dados.length} deputados recebidos.`);
    } catch {
      setMensagem("Não foi possível consultar a API. Verifique a conexão e tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>Deputados</Text>
      <Text style={styles.descricao}>Lista de deputados da Câmara dos Deputados</Text>

      <Button
        title={carregando ? "Consultando..." : "Consultar API"}
        onPress={buscarDeputados}
        disabled={carregando}
      />

      <Text style={styles.mensagem}>{mensagem}</Text>

      <FlatList
        style={styles.lista}
        contentContainerStyle={styles.conteudo}
        data={deputados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card
            nome={item.nome}
            siglaPartido={item.siglaPartido}
            siglaUf={item.siglaUf}
            urlFoto={item.urlFoto}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum deputado para exibir.</Text>
        }
      />
    </View>
  );
}
