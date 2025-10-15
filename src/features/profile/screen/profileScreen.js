import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import HeaderWrapper from "../../../components/HeaderWrapper";
import styles from "../styles/profileStyles";
import colors from "../../../constants/colors";
import Button from "../../../components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Separator from "../../../components/Separator";

export default function Profile() {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    name: "Bruno Silva",
    email: "bruno@email.com",
    photo: null,
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setUser((prev) => ({ ...prev, photo: result.assets[0].uri }));
    }
  };

  const handleEditInfo = () => {
    navigation.navigate("EditProfile", { user });
  };

  const handleChangePassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <HeaderWrapper title="Perfil" />

      <View style={styles.content}>
        <TouchableOpacity style={styles.avatarWrapper} onPress={pickImage}>
          {user.photo ? (
            <Image source={{ uri: user.photo }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Feather name="user" size={40} color={colors.textMuted} />
            </View>
          )}
          <Text style={styles.changePhoto}>Alterar foto</Text>
        </TouchableOpacity>

        <Text
          style={{
            width: "100%",
            marginVertical: 15,
            fontSize: 16,
            textAlign: "left",
            color: colors.textMuted,
          }}
        >
          Informações pessoais
        </Text>

        <View style={styles.infoBlock}>
          <MaterialIcons
            name="person-outline"
            size={18}
            color={colors.secondary}
          />
          <View style={styles.infoText}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
        </View>

        <View style={styles.infoBlock}>
          <MaterialIcons name="email" size={18} color={colors.secondary} />
          <View style={styles.infoText}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
        </View>

        <Text
          style={{
            width: "100%",
            marginVertical: 15,
            fontSize: 16,
            textAlign: "left",
            color: colors.textMuted,
          }}
        >
          Configurações
        </Text>

        <View style={styles.infoBlock}>
          <Feather name="edit" size={18} color={colors.secondary} />
          <TouchableOpacity style={styles.infoText} onPress={handleEditInfo}>
            <Text style={styles.label}>Editar informações</Text>
            <Text style={styles.value}>Alterar nome e email</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBlock}>
          <Feather name="lock" size={18} color={colors.secondary} />
          <TouchableOpacity
            style={styles.infoText}
            onPress={handleChangePassword}
          >
            <Text style={styles.label}>Mudar senha</Text>
            <Text style={styles.value}>Redefinir acesso</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBlock}>
          <Feather name="log-out" size={18} color={colors.secondary} />
          <TouchableOpacity style={styles.infoText} onPress={handleLogout}>
            <Text style={styles.label}>Sair do app</Text>
            <Text style={styles.value}>Encerrar sessão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
