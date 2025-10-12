import { Image, Text, TouchableOpacity } from "react-native";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import styles from "../styles/socialStyles";
import Separator from "../../../../components/Separator";

export default function GoogleScreen({ navigation }) {
  const handleGoogle = () => {
    /* Logica para fazer registro ou login com a conta do facebook */
    navigation.navigate("Home");
  };

  return (
    <ScreenWrapper>
      <Text style={styles.labelText}>
        Conecte-se com sua conta do Google para começar a cuidar com o Cultive+.
      </Text>

      <TouchableOpacity style={[styles.googleBtn]} onPress={handleGoogle}>
        <Image
          source={{
            uri: "https://img.icons8.com/color/48/000000/google-logo.png",
          }}
          style={styles.icon}
        />
        <Text style={styles.btnTextGoogle}>Continuar com Google</Text>
      </TouchableOpacity>

      <Separator label="ou" />

      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.textBtn}>Fazer cadastro manualmente</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
