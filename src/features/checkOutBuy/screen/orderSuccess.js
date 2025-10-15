import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/orderSuccessStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

export default function OrderSuccess() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/images/logo_app.png")}
          style={styles.logo}
        />
        <Text style={styles.textLogo}>Cultive+</Text>
      </View>

      <Image
        source={require("../../../../assets/images/fruit-shop-amico.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Compra realizada com sucesso!</Text>

      <Text style={styles.subtitle}>
        Obrigado por apoiar um agricultor local 🌾
      </Text>

      <Text style={styles.message}>
        Sua compra fortalece quem cultiva com carinho e dedicação. Cada fruta,
        cada verdura, carrega o esforço de quem planta com amor.
      </Text>

      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="leaf" size={32} color={colors.success} />
        <MaterialCommunityIcons
          name="truck-fast"
          size={32}
          color={colors.primary}
        />
        <MaterialCommunityIcons
          name="emoticon-happy-outline"
          size={32}
          color={colors.secondary}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Voltar para o início</Text>
      </TouchableOpacity>
    </View>
  );
}
