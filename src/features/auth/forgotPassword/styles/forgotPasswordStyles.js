import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.textDark,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    color: colors.textMuted,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderColor: colors.secondary,
    backgroundColor: colors.background,
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    color: colors.danger,
  },
  timerText: {
    textAlign: "center",
    color: colors.textDark,
    marginBottom: 10,
  },
  resend: {
    textAlign: "center",
    color: colors.secondary,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "500",
  },
  disabledResend: {
    color: "#bbb",
  },
  iconButton: {
    position: "absolute",
    right: 12,
    top: 15,
  },
});

export default styles;
