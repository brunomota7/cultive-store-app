import { useState } from "react";
import ScreenWrapper from "../../../../components/ScreenWrapper";
import styles from "../styles/authStyles";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../../components/Button";
import colors from "../../../../constants/colors";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("BASIC");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = ({ name, email, password, role }) => {
    if (!name || !email || !password) {
      setError("Preencha todos os campos corretamente");
      return;
    }

    if (role !== "FARMER") {
      setError("Role inválida para esse tipo de usuário");
      return;
    }

    setError("");
    navigation.navigate("Login");
  };

  return (
    <ScreenWrapper>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="ex: Jhon Alias"
          placeholderTextColor={colors.textMuted}
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

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
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button
        onPress={() => handleRegister({ name, email, password, role })}
        label={"Cadastrar"}
        style={{
          marginBottom: 10,
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já tem uma conta? Entre agora</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.socialButton, { borderWidth: 1, borderColor: colors.textMuted }]}
        onPress={() => navigation.navigate("GoogleAuth")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/000000/google-logo.png",
            }}
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Text style={styles.socialText}>Continuar com Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.socialButton, { backgroundColor: "#1877F2" }]}
        onPress={() => navigation.navigate("FacebookAuth")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/000000/facebook-new.png",
            }}
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Text style={[styles.socialText, { color: "#fff" }]}>
            Continuar com Facebook
          </Text>
        </View>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
