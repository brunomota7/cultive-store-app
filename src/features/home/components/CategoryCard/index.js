import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { id: 1, name: "Hortaliças", icon: "leaf", catPage: "HORTALICAS" },
  { id: 2, name: "Frutas", icon: "fruit-cherries", catPage: "FRUTAS" },
  { id: 3, name: "Legumes", icon: "carrot", catPage: "LEGUMES" },
  { id: 4, name: "Grãos e Cereais", icon: "corn", catPage: "GRAOS_CEREAIS" },
  { id: 5, name: "Tubérculos", icon: "food-apple", catPage: "TUBERCULOS" },
  {
    id: 6,
    name: "Ervas e Temperos",
    icon: "sprout",
    catPage: "ERVAS_TEMPEROS",
  },
  { id: 7, name: "Derivados", icon: "food-variant", catPage: "DERIVADOS" },
  { id: 8, name: "Ovos e Laticínios", icon: "egg", catPage: "OVOS_LATICINIOS" },
  { id: 9, name: "Plantas e Mudas", icon: "flower", catPage: "PLANTAS_MUDAS" },
];

export default function CategoryCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProductScreenByCategory", {
                category: cat.catPage,
              })
            }
          >
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name={cat.icon}
                size={28}
                color={colors.primary}
              />
            </View>
            <Text style={styles.label}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: colors.textDark,
  },
  card: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  iconWrapper: {
    backgroundColor: colors.background,
    borderRadius: 50,
    padding: 8,
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
  },
});
