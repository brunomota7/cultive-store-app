import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  logo: {
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.primary,
  },
  slogan: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 10,
    color: colors.secondary,
  },
});

export default styles;
