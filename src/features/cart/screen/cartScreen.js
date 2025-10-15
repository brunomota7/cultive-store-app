import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../../context/cartContext";
import { FlatList, Text, View } from "react-native";
import HeaderWrapper from "../../../components/HeaderWrapper";
import styles from "../styles/cartModalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import colors from "../../../constants/colors";

export default function CartScreen() {
  const navigation = useNavigation();
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  const handleCheckout = () => {
    navigation.navigate("ConfirmAddress");
  };

  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 16, backgroundColor: colors.background }}>
      <HeaderWrapper
        title="Seu carrinho"
        navigation={() => navigation.goBack()}
        style={{ paddingHorizontal: 0 }}
      />

      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={cartItems}
        keyExtractor={(item) => item.productId.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemInfos}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>Qtd: {item.quantity}</Text>
              <Text style={styles.itemDetails}>
                Subtotal: R$ {(item.quantity * item.price).toFixed(2)}
              </Text>
            </View>
            <View style={styles.actionsRow}>
              <View style={styles.actionButton}>
                <MaterialCommunityIcons
                  name="plus"
                  size={18}
                  color={colors.primary}
                  onPress={() =>
                    updateQuantity(item.productId, item.quantity + 1)
                  }
                />
              </View>
              <View style={styles.actionButton}>
                <MaterialCommunityIcons
                  name="minus"
                  size={18}
                  color={colors.primary}
                  onPress={() =>
                    updateQuantity(item.productId, item.quantity - 1)
                  }
                />
              </View>
              <View style={styles.actionButton}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={18}
                  color={colors.danger}
                  onPress={() => removeFromCart(item.productId)}
                />
              </View>
            </View>
          </View>
        )}
      />

      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.totalText}>Total: R$ {totalPrice.toFixed(2)}</Text>

        <View style={styles.footerRow}>
          <Button
            label="Limpar carrinho"
            onPress={clearCart}
            style={{ backgroundColor: colors.danger, flex: 1, marginRight: 8 }}
          />
          <Button
            label="Finalizar Compra"
            onPress={handleCheckout}
            style={{ backgroundColor: colors.success, flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
}
