import { FlatList, Text, View } from "react-native";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { renderStatusIcon } from "../../../utils/utils";
import styles from "../styles/ordersStyles";
import HeaderWrapper from "../../../components/HeaderWrapper";

const mockOrders = [
  {
    id: "1",
    date: "15/10/2025",
    total: 89.9,
    status: "A enviar",
    items: ["Banana", "Tomate", "Alface"],
  },
  {
    id: "2",
    date: "12/10/2025",
    total: 45.5,
    status: "A caminho",
    items: ["Cenoura", "Maçã"],
  },
  {
    id: "3",
    date: "08/10/2025",
    total: 120.0,
    status: "Entregue",
    items: ["Melancia", "Couve", "Batata"],
  },
];

export default function OrdersScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderWrapper title={"Seus Pedidos"} />

        <FlatList
          data={mockOrders}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                {renderStatusIcon(item.status)}
                <Text style={styles.status}>{item.status}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>

              <Text style={styles.total}>
                Total: R$ {item.total.toFixed(2)}
              </Text>
              <Text style={styles.items}>Itens: {item.items.join(", ")}</Text>

              <Button
                onPress={() =>
                  navigation.navigate("OrderDetails", { order: item })
                }
                label={"Ver detalhes"}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
