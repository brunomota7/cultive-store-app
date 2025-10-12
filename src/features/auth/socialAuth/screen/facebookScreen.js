import { Image, Text, TouchableOpacity } from "react-native";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import Separator from "../../../../components/Separator";
import styles from "../styles/socialStyles";

export default function FacebookScreen({ navigation }) {
  const handleFacebook = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenWrapper>
      <Text style={styles.labelText}>
        Conecte-se com sua conta do Facebook para começar a cuidar com o
        Cultive+.
      </Text>

      <TouchableOpacity
        style={[styles.facebookBtn, { backgroundColor: "#1877F2" }]}
        onPress={handleFacebook}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/color/48/000000/facebook-new.png",
          }}
          style={styles.icon}
        />
        <Text style={styles.btnText}>Continuar com Facebook</Text>
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
