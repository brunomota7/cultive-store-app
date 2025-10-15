import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../constants/colors";
import { useCart } from "../../context/cartContext";

export default function FloatingButton({ onPress, icon, style }) {
  const { totalItems } = useCart();

  return (
    <TouchableOpacity style={[styles.floatingButton, style]} onPress={onPress}>
      {icon}
      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: colors.danger,
    borderRadius: 100,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: colors.textWhite,
    fontSize: 10,
    fontWeight: "bold",
  },
});
