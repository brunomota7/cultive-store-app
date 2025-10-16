import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textDark,
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: colors.textMuted,
  },
  total: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.success,
    marginBottom: 4,
  },
  items: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: 13,
    fontWeight: "600",
  },
});

export default styles;
