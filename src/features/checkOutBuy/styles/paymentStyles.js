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
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 100,
  },
  modalContent: {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 16,
  },
  qrCodeBox: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  pixCode: {
    fontSize: 12,
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 8,
  },
  copyText: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 12,
    textDecorationLine: "underline",
  },
  timerText: {
    fontSize: 14,
    color: colors.warning,
    marginBottom: 16,
  },
});

export default styles;
