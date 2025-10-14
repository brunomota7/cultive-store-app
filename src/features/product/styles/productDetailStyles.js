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
    alignItems: "center",
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 16,
    marginBottom: 16,
    resizeMode: "cover",
    backgroundColor: colors.surface,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoCard: {
    padding: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 6,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: colors.textWhite,
    fontWeight: "bold",
    fontSize: 16,
  },
  detail: {
    fontSize: 14,
    color: colors.textDark,
  },
  farmerCard: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
