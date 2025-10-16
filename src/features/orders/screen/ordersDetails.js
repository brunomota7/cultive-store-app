import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, Alert } from "react-native";
import styles from "../styles/orderDetailsStyles";
import HeaderWrapper from "../../../components/HeaderWrapper";
import Button from "../../../components/Button";
import { renderStatusIcon } from "../../../utils/utils";
import { useCart } from "../../../context/cartContext";
import { useState } from "react";
import DeliveryTimeline from "../../../components/DeliveryTimeLine";
import { TextInput } from "react-native";
import colors from "../../../constants/colors";

export default function OrdersDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { order } = route.params;
  const { setCartItems } = useCart();
  const [cancelReason, setCancelReason] = useState("");

  const isOrderCancelable = () => {
    const orderDate = new Date(order.date.split("/").reverse().join("-"));
    const now = new Date();
    const diffInMs = now - orderDate;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    return diffInHours <= 24;
  };

  const handleReorder = () => {
    const cartFormatted = order.items.map((itemName, index) => ({
      productId: `${order.id}-${index}`,
      name: itemName,
      quantity: 1,
      price: 10.0,
    }));

    setCartItems(cartFormatted);
    navigation.navigate("ConfirmAddress");
  };

  return (
    <View style={styles.container}>
      <HeaderWrapper
        title="Detalhes do Pedido"
        navigation={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.section}>
            <View style={styles.statusRow}>
              {renderStatusIcon(order.status)}
              <Text style={styles.status}>{order.status}</Text>
              <Text style={styles.date}>{order.date}</Text>
            </View>

            <Text style={styles.total}>
              Total da compra: R$ {order.total.toFixed(2)}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Itens do pedido</Text>
            <FlatList
              data={order.items}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item }) => (
                <Text style={styles.itemText}>• {item}</Text>
              )}
            />
          </View>

          {order.status === "A enviar" && isOrderCancelable() && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cancelar pedido</Text>
              <TextInput
                placeholder="Informe o motivo do cancelamento"
                value={cancelReason}
                onChangeText={setCancelReason}
                multiline={true}
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: colors.border,
                  borderRadius: 6,
                  padding: 8,
                  minHeight: 80,
                  textAlignVertical: "top",
                  marginBottom: 12,
                  backgroundColor: colors.surface,
                }}
              />
              <Button
                label="Cancelar pedido"
                onPress={() => {
                  if (!cancelReason.trim()) {
                    Alert.alert(
                      "Motivo obrigatório",
                      "Por favor, informe o motivo."
                    );
                    return;
                  }
                  Alert.alert(
                    "Pedido cancelado",
                    "Seu pedido foi cancelado com sucesso."
                  );
                  //funcao para atualizar o status no backend
                  navigation.goBack();
                }}
                style={{ backgroundColor: colors.danger }}
              />
              <Text style={{
                marginTop: 20,
                textAlign: "center",
                color: colors.textMuted,
              }}>
                O botão de cancelamento sumirá após 24 horas.
              </Text>
            </View>
          )}

          {order.status === "A caminho" && <DeliveryTimeline />}

          {["Entregue", "A caminho"].includes(order.status) && (
            <Button
              label="Comprar novamente"
              onPress={handleReorder}
              style={{ marginHorizontal: 8, marginTop: 20 }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
