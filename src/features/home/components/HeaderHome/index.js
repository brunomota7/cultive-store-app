import { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../../constants/colors";

export default function HeaderHome({ navigation }) {
  const [avatarUri, setAvatarUri] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const choosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Erro", "Permissão necessária para acessar as fotos");
      return;
    }

    const resullt = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsEditing: true,
    });

    if (!resullt.canceled) {
      setAvatarUri(resullt.assets[0].uri);
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={navigation}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.logoText}>Cultive+</Text>
        <Text style={styles.subTitleText}>Store</Text>
      </Animated.View>

      <TouchableOpacity onPress={choosePhoto}>
        <Image
          source={
            avatarUri
              ? { uri: avatarUri }
              : require("../../../../../assets/images/avatar.png")
          }
          style={styles.avatarUser}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  menuButton: {
    alignSelf: "flex-start",
    padding: 8,
  },
  menuIcon: {
    fontSize: 30,
    color: colors.textDark,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: colors.secondary,
  },
  subTitleText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 2,
    color: colors.accentOrange,
  },
  avatarUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textMuted,
  },
});
