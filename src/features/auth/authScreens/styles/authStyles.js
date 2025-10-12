import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
    marginBottom: 5,
    marginTop: 10,
    color: colors.secondary,
  },
  input: {
    height: 50,
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  iconButton: {
    position: "absolute",
    right: 12,
    top: 15,
  },
  link: {
    marginTop: 5,
    marginBottom: 12,
    fontSize: 15,
    color: colors.textDark,
  },
  socialButton: {
    height: 50,
    borderRadius: 8,
    padding: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: colors.surface,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textMuted,
  },
  errorText: {
    color: colors.danger,
    marginBottom: 10,
  },
});

export default styles;
