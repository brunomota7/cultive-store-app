import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Clipboard,
} from "react-native";
import styles from "../styles/paymentStyles";
import HeaderWrapper from "../../../components/HeaderWrapper";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { useCart } from "../../../context/cartContext";
import { useNotifications } from "../../../context/notificationContext";

export default function Payment() {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const { clearCart } = useCart();
  const { addNotification } = useNotifications();
  const { cartItems, totalPrice, address } = route.params;
  const [showPixModal, setShowPixModal] = useState(false);
  const [pixCode, setPixCode] = useState("00020126580014br.gov.cultive.pix...");
  const [timeLeft, setTimeLeft] = useState(300);

  const handleFinish = () => {
    if (!selectedMethod) return alert("Selecione um método de pagamento");
    if (selectedMethod === "pix") {
      setShowPixModal(true);
      setTimeLeft(300);
    } else {
      Alert.alert(
        "Aviso",
        "Este método de pagamento ainda não está disponível."
      );
    }
  };

  const handleCancel = () => {
    clearCart();
    addNotification(
      "warning",
      `Compra de R$ ${totalPrice.toFixed(2)} cancelada.`
    );
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (!showPixModal || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [showPixModal, timeLeft]);

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
      available: true,
    },
    {
      id: "credit",
      label: "Cartão de Crédito",
      icon: (
        <FontAwesome5 name="credit-card" size={20} color={colors.secondary} />
      ),
      available: false,
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
      available: false,
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

        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.textMuted, fontSize: 12 }}>
            Pagamento por cartão de crédito e débito estará disponível
            futuramente.
          </Text>
        </View>
      </View>

      {showPixModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pagamento via Pix</Text>
            <View style={styles.qrCodeBox}>
              <MaterialCommunityIcons
                name="qrcode"
                size={120}
                color={colors.primary}
              />
            </View>
            <Text style={styles.pixCode}>{pixCode}</Text>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString(pixCode),
                  Alert.alert("Código Pix copiado.");
              }}
            >
              <Text style={styles.copyText}>Copiar código Pix</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>
              Tempo restante: {Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </Text>
            <Button
              label="Confirmar pagamento"
              onPress={() => {
                setShowPixModal(false);
                addNotification(
                  "success",
                  `Compra realizada com sucesso no valor de R$ ${totalPrice.toFixed(
                    2
                  )}.`
                );
                clearCart();
                navigation.navigate("OrderSuccess");
              }}
            />

            <TouchableOpacity
              onPress={() => setShowPixModal(false)}
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: colors.danger,
                }}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
