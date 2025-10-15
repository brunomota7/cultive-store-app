import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
import HeaderWrapper from "../../../components/HeaderWrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import styles from "../styles/productDetailStyles";
import Button from "../../../components/Button";
import { formatDate, formtCategory } from "../../../utils/utils";
import FloatingButton from "../../../components/FloatingButton";
import { useCart } from "../../../context/cartContext";
import { useState } from "react";
import CartModal from "../../cart/screen/cartModal";

export default function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;
  const { addToCart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      <HeaderWrapper
        title="Detalhes do Produto"
        navigation={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />

        <View style={styles.infoCard}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="cube-outline"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.detail}>Estoque: {product.inStock}</Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="cash"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.detail}>
              Preço: R$ {product.price.toFixed(2)}
            </Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="calendar"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.detail}>
              Cadastro: {formatDate(product.registrationDate)}
            </Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="tag-outline"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.detail}>
              Categoria: {formtCategory(product.category.name)}
            </Text>
          </View>
        </View>

        <View style={styles.farmerCard}>
          <View
            style={[
              styles.row,
              {
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 6,
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Agricultor responsável</Text>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {product.userName.charAt(0)}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons
              name="account"
              size={18}
              color={colors.secondary}
            />
            <Text style={styles.detail}>{product.userName}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="email-outline"
              size={18}
              color={colors.secondary}
            />
            <Text style={styles.detail}>{product.userEmail}</Text>
          </View>
        </View>

        <Button
          label={"Adicionar ao carrinho"}
          icon={
            <MaterialCommunityIcons
              name="cart"
              size={20}
              color={colors.textWhite}
            />
          }
          onPress={handleAddToCart}
        />
      </ScrollView>

      <FloatingButton 
        icon={<MaterialCommunityIcons name="cart" size={20} color={colors.textWhite} />}
        onPress={() => setCartVisible(true)}
      />

      <CartModal 
        visible={cartVisible}
        onClose={() => setCartVisible(false)}
        onCheckout={() => {
          setCartVisible(false);
          navigation.navigate("ConfirmAddress");
        }}
      />
    </View>
  );
}
