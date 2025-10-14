import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalBody: {
    position: "absolute",
    top: height * 0.1,
    height: height * 0.9,
    width: "100%",
    backgroundColor: colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
    color: colors.textDark,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  addressCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  addressCardSelected: {
    borderColor: colors.success,
  },
  addressInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 30,
  },
  addressText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.textDark,
  },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    right: 12,
    position: "absolute",
  },
});

export default styles;
