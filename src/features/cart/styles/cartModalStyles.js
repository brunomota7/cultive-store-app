import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: colors.background,
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 20,
    elevation: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemInfos: {},
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 4,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 16,
    color: colors.textDark,
    textAlign: "right",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});

export default styles;
