import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
    paddingTop: 62,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#202C50",
  },
  descricao: {
    fontSize: 15,
    color: "#526078",
    marginTop: 8,
    marginBottom: 24,
  },
  mensagem: {
    fontSize: 15,
    color: "#202C50",
    marginVertical: 20,
  },
  lista: {
    flex: 1,
  },
  conteudo: {
    gap: 12,
    paddingBottom: 8,
  },
  vazio: {
    fontSize: 14,
    color: "#526078",
    textAlign: "center",
    marginTop: 16,
  },
});
