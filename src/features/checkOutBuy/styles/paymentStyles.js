import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 8,
  },
  addressText: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 2,
  },
  itemRow: {
    marginBottom: 12,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
  },
  itemDetails: {
    fontSize: 14,
    color: colors.textMuted,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.success,
    marginBottom: 16,
    textAlign: "center",
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 10,
    backgroundColor: colors.surface,
    gap: 12,
  },
  paymentOptionSelected: {
    borderColor: colors.secondary,
    backgroundColor: colors.success,
  },
  paymentLabel: {
    fontSize: 14,
    color: colors.textDark,
    flex: 1,
  },
});

export default styles;
