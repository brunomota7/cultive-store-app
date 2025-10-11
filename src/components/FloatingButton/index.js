import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

export default function FloatingButton({ onPress, icon, style }) {
  return (
    <TouchableOpacity style={[styles.floatingButton, style]} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
});
