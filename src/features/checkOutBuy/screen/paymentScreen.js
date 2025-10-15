import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/paymentStyles";
import HeaderWrapper from "../../../components/HeaderWrapper";
import Button from "../../../components/Button";
import { useState } from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { useCart } from "../../../context/cartContext";

export default function Payment() {
  const navigation = useNavigation();
  const route = useRoute();
  const { clearCart } = useCart();
  const { cartItems, totalPrice, address } = route.params;

  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleFinish = () => {
    if (!selectedMethod) return alert("Selecione um método de pagamento");
    navigation.navigate("OrderSuccess", {
      address,
      totalPrice,
      cartItems,
      paymentMethod: selectedMethod,
    });
  };

  const handleCancel = () => {
    clearCart();
    navigation.navigate("Home");
  };

  const paymentMethods = [
    {
      id: "pix",
      label: "Pix",
      icon: (
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={20}
          color={colors.secondary}
        />
      ),
    },
    {
      id: "credit",
      label: "Cartão de Crédito",
      icon: (
        <FontAwesome5 name="credit-card" size={20} color={colors.secondary} />
      ),
    },
    {
      id: "debit",
      label: "Cartão de Débito",
      icon: (
        <MaterialCommunityIcons
          name="credit-card-outline"
          size={20}
          color={colors.secondary}
        />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderWrapper title="Pagamento" navigation={() => navigation.goBack()} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Endereço de entrega</Text>
        <Text style={styles.addressText}>{address.street}</Text>
        <Text style={styles.addressText}>
          {address.city} • {address.zipCode}
        </Text>
        <Text style={styles.addressText}>{address.country}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Itens do pedido</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>
                {item.quantity} x R$ {item.price.toFixed(2)}
              </Text>
              <Text style={styles.itemDetails}>
                Subtotal: R$ {(item.quantity * item.price).toFixed(2)}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Método de pagamento</Text>
        {paymentMethods.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.paymentOption,
                isSelected && styles.paymentOptionSelected,
              ]}
              onPress={() => setSelectedMethod(method.id)}
            >
              {method.id === "pix" && (
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={20}
                  color={isSelected ? colors.textWhite : colors.secondary}
                />
              )}
              {method.id === "credit" && (
                <FontAwesome5
                  name="credit-card"
                  size={20}
                  color={isSelected ? colors.textWhite : colors.secondary}
                />
              )}
              {method.id === "debit" && (
                <MaterialCommunityIcons
                  name="credit-card-outline"
                  size={20}
                  color={isSelected ? colors.textWhite : colors.secondary}
                />
              )}

              <Text
                style={[
                  styles.paymentLabel,
                  isSelected ? { color: colors.textWhite } : null,
                ]}
              >
                {method.label}
              </Text>
              {isSelected && (
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color={colors.textWhite}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.totalText}>
          Total da compra: R$ {totalPrice.toFixed(2)}
        </Text>

        <Button label="Finalizar pedido" onPress={handleFinish} />

        <Button
          label="Cancelar compra"
          onPress={handleCancel}
          style={{ backgroundColor: colors.danger, marginTop: 10 }}
        />
      </View>
    </View>
  );
}
