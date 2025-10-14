import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import HeaderHome from "../components/HeaderHome";
import SearchButton from "../../../components/SearchButton";
import { use, useState } from "react";
import styles from "../styles/homeStyles";
import MockProducts from "../../../constants/mockProducts";
import CategoryCard from "../components/CategoryCard";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const user = {
  name: "Bruno",
  address: "R. dos Cedros, 12",
};

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState(MockProducts);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const lastPurchases = products.slice(0, 5);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderHome navigation={() => navigation.openDrawer()} />

        <View style={[styles.section, { flexDirection: "row", justifyContent: "space-between" }]}>
          <Text style={styles.username}>Olá, {user.name}</Text>

          <TouchableOpacity
            style={styles.btnAddress}
            onPress={() => navigation.navigate("AddressScreen", { address: user.address })}
            >
            <MaterialIcons name="expand-more" size={18} />
            <Text>{user.address}</Text>
          </TouchableOpacity>
        </View>

        <SearchButton
          value={search}
          onChangeText={setSearch}
          placeholder={"Buscar produto..."}
        />

        <CategoryCard />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas compras</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {lastPurchases.map((item) => (
              <TouchableOpacity
                key={item.productId}
                style={styles.purchaseCard}
                onPress={() => console.log("Detalhes do produto:", item.name)}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.purchaseImage}
                />
                <Text style={styles.purchaseName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Produtos em destaque</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.productId.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => console.log("Abrir detalhes:", item.name)}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    R$ {item.price.toFixed(2)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}
