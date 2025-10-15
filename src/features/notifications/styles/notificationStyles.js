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
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    color: colors.textMuted,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  notificationContent: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: colors.textMuted,
  },
});

export default styles;
