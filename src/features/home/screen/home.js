import { FlatList, TouchableOpacity, View } from "react-native";
import HeaderHome from "../components/HeaderHome";
import SearchButton from "../../../components/SearchButton";
import { useState } from "react";
import styles from "../styles/homeStyles";
import MockProducts from "../../../constants/mockProducts";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState(MockProducts);
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderHome navigation={() => navigation.openDrawer()} />
        <SearchButton value={search} onChangeText={setSearch} placeholder={"Buscar banca..."} />

      </View>
    </View>
  );
}
