import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function HeaderWrapper({ navigation, title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>{title}</Text>
      <TouchableOpacity style={styles.btnHeader} onPress={navigation}>
        <MaterialCommunityIcons
          name="close"
          size={24}
          color={colors.textWhite}
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
  logoText: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: colors.textWhite,
  },
  btnHeader: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
});
