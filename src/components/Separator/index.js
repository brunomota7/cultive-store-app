import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function Separator({ label, style }) {
  if (label) {
    return (
      <View style={[styles.separatorContainer, style]}>
        <View style={[styles.separator, style]} />
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.separator, style]} />
      </View>
    );
  }

  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
  },
  separator: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  label: {
    marginHorizontal: 12,
    fontSize: 14,
    color: colors.textMuted,
  },
});
