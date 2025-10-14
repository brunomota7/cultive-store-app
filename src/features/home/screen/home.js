import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import HeaderHome from "../components/HeaderHome";
import SearchButton from "../../../components/SearchButton";
import { useState } from "react";
import styles from "../styles/homeStyles";
import MockProducts from "../../../constants/mockProducts";
import CategoryCard from "../components/CategoryCard";
import { MaterialIcons } from "@expo/vector-icons";
import AddressModal from "./addressModal";
import colors from "../../../constants/colors";

const user = {
  name: "Bruno",
  address: "R. dos Cedros, 12",
};

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState(MockProducts);
  const [search, setSearch] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(user.address);
  const [modalVisible, setModalVisible] = useState(false);

  const lastPurchases = products.slice(0, 5);

  const filteredProduct = MockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.content}>
          <HeaderHome navigation={() => navigation.openDrawer()} />

          <View
            style={[
              styles.section,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <Text style={styles.username}>Olá, {user.name}</Text>

            <TouchableOpacity
              style={styles.btnAddress}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons name="expand-more" size={18} color={colors.zinc} />
              <Text>{selectedAddress}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Por que o Cultive existe?</Text>
            <Text style={styles.bannerText}>
              Conectamos você ao campo com qualidade e propósito.
            </Text>
          </View>

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
            <SearchButton
              value={search}
              onChangeText={setSearch}
              placeholder={"Buscar produto..."}
              colorIcon={colors.secondary}
            />
          </View>

          <View style={styles.section}>
            {filteredProduct.map((item) => (
              <TouchableOpacity
                key={item.productId}
                style={styles.productCard}
                onPress={() => console.log("Abrir detalhes")}
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
            ))}
          </View>
        </ScrollView>

        <AddressModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelectAddress={(address) => {
            setSelectedAddress(address);
            setModalVisible(false);
          }}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
