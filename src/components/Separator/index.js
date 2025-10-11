import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function Separator({ label }) {
  if (label) {
    return (
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.label}>{label}</Text>
        <View style={styles.separator} />
      </View>
    );
  }

  return <View style={styles.separator} />;
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
    borderColor: colors.textMuted,
  },
  label: {
    marginHorizontal: 12,
    fontSize: 14,
    color: colors.textMuted,
  },
});
