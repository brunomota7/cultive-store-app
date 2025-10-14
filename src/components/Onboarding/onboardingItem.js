import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");

export default function OnboardingItem({ item }) {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginHorizontal: 16,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 16,
    resizeMode: "contain",
    borderRadius: 12,
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 8,
    color: colors.primary,
    textAlign: "center",
  },
  description: {
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
    color: colors.textMuted,
    paddingHorizontal: 24,
    lineHeight: 22,
  },
});
