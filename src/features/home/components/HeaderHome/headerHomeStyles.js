import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  menuButton: {
    alignSelf: "flex-start",
    padding: 8,
  },
  menuIcon: {
    fontSize: 30,
    color: colors.textDark,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: colors.secondary,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  notificationBtn: {
    width: 30,
    height: 30,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.9,
    borderRadius: 8,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    backgroundColor: colors.danger,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  badgeText: {
    color: colors.textWhite,
    fontSize: 10,
    fontWeight: "bold",
  },
  btnAddress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 5,
    borderWidth: 0.9,
    borderRadius: 8,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
});

export default styles;
