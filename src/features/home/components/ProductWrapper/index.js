import { useNavigation, useRoute } from "@react-navigation/native";
import MockProducts from "../../../../constants/mockProducts";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderWrapper from "../../../../components/HeaderWrapper";
import SearchButton from "../../../../components/SearchButton";
import { useState } from "react";
import colors from "../../../../constants/colors";

export default function ProductScreenByCategory() {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params;
  const [search, setSearch] = useState("");

  const filteredProducts = MockProducts.filter(
    (product) => 
        product.category.name === category &&
        product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <HeaderWrapper
        title={category.replace("_", " ")}
        navigation={() => navigation.navigate("Home")}
      />

      <SearchButton
        value={search}
        onChangeText={setSearch}
        placeholder={"Buscar produto..."}
        colorIcon={colors.secondary}
        style={{
          marginHorizontal: 16,
        }}
      />

      <View style={styles.content}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.productId.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            >
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
                <Text style={styles.user}>Produtor: {item.userName}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "flex-start",
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
  },
  price: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
});
