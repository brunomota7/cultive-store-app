import { StyleSheet, TextInput, View } from "react-native";
import colors from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchButton({ value, onChangeText, placeholder, colorIcon, style }) {
  return (
    <View style={[styles.searchBox, style]}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        value={value}
        onChangeText={onChangeText}
      />
      <MaterialCommunityIcons
        name="magnify"
        size={24}
        color={colorIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: colors.textDark,
  },
});
