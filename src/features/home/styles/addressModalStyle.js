import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";

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
    justifyContent: "space-between",
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
    flexDirection: "row",
    alignItems: "center",
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
  },
  contentOption: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionsBox: {
    backgroundColor: colors.background,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.textDark,
  },
  optionBtn: {
    width: 130,
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
  },
  optionText: {
    fontSize: 15,
    color: colors.textDark,
    fontWeight: "500",
  },
  cancelBtn: {
    marginVertical: 20,
    alignItems: "center",
  },
});

export default styles;
