import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 6,
  },
  logo: {
    width: 60,
    height: 60,
  },
  textLogo: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.primary,
  },
  image: {
    width: "100%",
    height: 220,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.success,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 12,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  iconBox: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.primaryLight,
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
