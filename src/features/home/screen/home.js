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
import colors from "../../../constants/colors";
import Onboarding from "../../../components/Onboarding";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState(MockProducts);
  const [search, setSearch] = useState("");

  const lastPurchases = products.slice(0, 5);

  const filteredProduct = MockProducts.filter(
    (p) => p.isFeatured && p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.content}>
          {/* Header */}
          <HeaderHome navigation={() => navigation.openDrawer()} />

          {/* Slide */}
          <Onboarding />

          {/* Categorys */}
          <CategoryCard />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Últimas compras</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {lastPurchases.map((item) => (
                <TouchableOpacity
                  key={item.productId}
                  style={styles.purchaseCard}
                  onPress={() =>
                    navigation.navigate("ProductDetails", { product: item })
                  }
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

          <Text style={[styles.sectionTitle, { marginHorizontal: 16 }]}>
            Produtos em destaque
          </Text>
          <SearchButton
            value={search}
            onChangeText={setSearch}
            placeholder={"Buscar produto..."}
            colorIcon={colors.secondary}
            style={{
              marginHorizontal: 16,
            }}
          />

          {filteredProduct.map((item) => (
            <TouchableOpacity
              key={item.productId}
              style={[styles.productCard, { marginHorizontal: 16 }]}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
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
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
