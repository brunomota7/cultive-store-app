import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../../components/Button";
import colors from "../../../../constants/colors";
import styles from "../styles/forgotPasswordStyles";

export default function ChangePassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    Alert.alert("Sucesso", "Senha alterada com sucesso!");
    navigation.navigate("Login");
  };

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>Digite a sua nova senha.</Text>

      <View style={{ position: "relative", width: "100%" }}>
        <TextInput
          placeholder="Nova senha"
          placeholderTextColor={colors.textMuted}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialCommunityIcons
            name={showPassword ? "eye" : "eye-off"}
            size={24}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>

      <View style={{ position: "relative", width: "100%" }}>
        <TextInput
          placeholder="Confirmar nova senha"
          placeholderTextColor={colors.textGray}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <MaterialCommunityIcons
            name={showConfirmPassword ? "eye" : "eye-off"}
            size={24}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>

      <Button
        onPress={handleChangePassword}
        label={"Confirmar"}
        style={{
          marginBottom: 10,
          marginTop: 10,
        }}
      />

      <Button
        onPress={() => navigation.navigate("Login")}
        label={"Voltar ao Login"}
        style={{
          borderWidth: 2,
          borderWidth: 1,
          borderColor: colors.textWhite,
          backgroundColor: colors.zinc,
        }}
      />
    </ScreenWrapper>
  );
}
