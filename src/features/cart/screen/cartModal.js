import { FlatList, Modal, Text, View } from "react-native";
import { useCart } from "../../../context/cartContext";
import styles from "../styles/cartModalStyles";
import HeaderWrapper from "../../../components/HeaderWrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import Button from "../../../components/Button";

export default function CartModal({ visible, onClose, onCheckout }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <HeaderWrapper title={"Seu carrinho"} navigation={onClose} style={{  paddingHorizontal: 0 }} />

          <FlatList
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

          <Text style={styles.totalText}>
            Total: R$ {totalPrice.toFixed(2)}
          </Text>

          <View style={styles.footerRow}>
            <Button
              label="Limpar carrinho"
              onPress={clearCart}
              style={{
                backgroundColor: colors.danger,
                flex: 1,
                marginRight: 8,
              }}
            />
            <Button
              label="Finalizar Compra"
              onPress={onCheckout}
              style={{ backgroundColor: colors.success, flex: 1 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
