import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  changePhoto: {
    marginTop: 8,
    fontSize: 13,
    color: colors.secondary,
  },
  infoBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 16,
    gap: 12,
  },
  infoText: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.textDark,
    backgroundColor: colors.surface,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default styles;
