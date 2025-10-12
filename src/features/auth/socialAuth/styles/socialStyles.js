import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    backgroundColor: colors.background,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "900",
    marginLeft: 10,
    marginBottom: 8,
    color: colors.textWhite,
  },
  slogan: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 10,
    color: colors.primary,
  },
  content: {
    flexGrow: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  labelText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: colors.textMuted,
  },
  facebookBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.textMuted,
    backgroundColor: colors.surface,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textWhite,
  },
  btnTextGoogle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textDark,
  },
  btnRegister: {
    width: "100%",
    height: 50,
    padding: 12,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textWhite,
  },
  link: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 20,
    color: colors.textMuted,
  },
});

export default styles;
