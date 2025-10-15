import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    color: colors.textDark,
  },
  addressCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
    backgroundColor: colors.surface,
  },
  addressCardSelected: {
    borderColor: colors.secondary,
  },
  addressInfo: {
    flex: 1,
    marginLeft: 12,
  },
  addressText: {
    fontSize: 14,
    color: colors.textDark,
  },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default styles;
