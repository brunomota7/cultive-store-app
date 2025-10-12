import { useEffect, useState } from "react";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import { Text, TextInput, TouchableOpacity } from "react-native";
import Button from "../../../../components/Button";
import styles from "../styles/forgotPasswordStyles";
import colors from "../../../../constants/colors";

export default function ValidateCode({ navigation }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(120);

  useEffect(() => {
    if (countdown <= 0) return;
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const handleValidate = () => {
    if (code.length !== 6) {
      setError("Código incorreto. Verifique e tente novamente.");
    } else {
      setError("");
      navigation.navigate("ChangePassword");
    }
  };

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Verifique o Código</Text>
      <Text style={styles.subtitle}>
        Digite o código de 6 dígitos que foi enviado para seu email.
      </Text>

      <TextInput
        style={[
          {
            width: "100%",
            height: 50,
            padding: 12,
            marginBottom: 10,
            fontSize: 20,
            letterSpacing: 10,
            textAlign: "center",
            borderWidth: 2,
            borderRadius: 8,
            borderColor: colors.secondary,
            backgroundColor: colors.surface,
          },
          error ? styles.inputError : null,
        ]}
        value={code}
        onChangeText={setCode}
        maxLength={6}
        keyboardType="numeric"
        placeholder="000000"
        placeholderTextColor={colors.textGray}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Text style={styles.timerText}>
        Código expira em: {Math.floor(countdown / 60)}:
        {("0" + (countdown % 60)).slice(-2)}
      </Text>

      <TouchableOpacity disabled={countdown > 0}>
        <Text style={[styles.resend, countdown > 0 && styles.disabledResend]}>
          Reenviar Código
        </Text>
      </TouchableOpacity>

      <Button
        onPress={handleValidate}
        label={"Validar código"}
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
