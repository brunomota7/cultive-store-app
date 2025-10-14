import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  username: {
    fontSize: 15,
    marginBottom: 6,
    fontWeight: "700",
  },
  btnAddress: {
    flexDirection: "row",
    gap: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  banner: {
    backgroundColor: colors.surface,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 4,
  },
  bannerText: {
    fontSize: 14,
    color: colors.textMuted,
  },

  categoryButton: {
    backgroundColor: colors.surface,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  purchaseCard: {
    width: 100,
    marginRight: 12,
    alignItems: "center",
  },
  purchaseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  purchaseName: {
    fontSize: 12,
    color: colors.textDark,
    marginTop: 4,
    textAlign: "center",
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginVertical: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
  },
  productPrice: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
});

export default styles;
