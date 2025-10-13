import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../../constants/colors";


export default function ProductCard({
  name,
  price,
  category,
  imageUrl,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.main}>
          <Text style={styles.category}>{category.name}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  category: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: "600",
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
});
