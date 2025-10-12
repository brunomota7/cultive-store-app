import { useState } from "react";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import Button from "../../../../components/Button";
import { Text, TextInput } from "react-native";
import styles from "../styles/forgotPasswordStyles";
import colors from "../../../../constants/colors";

export default function ForgotPassword({ navigation }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSendCode = () => {
    if (code.length < 5) {
      setError("Insira um e-mail ou número válido");
    } else {
      setError("");
      navigation.navigate("ValidateCode");
    }
  };

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>
        Informe seu email para receber um código de verificação.
      </Text>

      <TextInput
        placeholder="Digite seu email"
        placeholderTextColor={colors.textMuted}
        value={code}
        onChangeText={setCode}
        style={[styles.input, error ? styles.inputError : null]}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button
        onPress={handleSendCode}
        label={"Enviar Código"}
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
