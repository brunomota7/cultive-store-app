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
  card: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  statusRow: {
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
    fontSize: 16,
    fontWeight: "700",
    color: colors.success,
    marginTop: 4,
  },
  itemText: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 4,
  },
});

export default styles;
