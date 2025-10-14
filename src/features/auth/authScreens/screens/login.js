import { Text, TextInput, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../../components/Button";
import colors from "../../../../constants/colors";
import styles from "../styles/authStyles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
/*     if (!email || password.length < 6) {
      setError("E-mail ou senha inválidos");
      return;
    } */
    setError("");
    navigation.navigate("Home");
  };

  return (
    <ScreenWrapper>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="ex: jhonalias@exemplo.com"
          placeholderTextColor={colors.textMuted}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.label}>Senha</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Informe sua senha"
            placeholderTextColor={colors.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color={colors.primaryLight}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{ alignItems: "flex-end" }}
          >
            <Text style={styles.link}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button
        onPress={handleLogin}
        label={"Entrar"}
        style={{
          marginBottom: 10,
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
