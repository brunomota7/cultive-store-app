import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../../features/home/screen/home";
import colors from "../../constants/colors";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useCart } from "../../context/cartContext";
import CartScreen from "../../features/cart/screen/cartScreen";
import Profile from "../../features/profile/screen/profileScreen";
import NotificationScreen from "../../features/notifications/screen/notification";
import { useNotifications } from "../../context/notificationContext";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const { totalItems } = useCart();
  const { unreadCount } = useNotifications();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: Platform.OS === "android" ? 6 : 0,
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 40,
          paddingTop: 6,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          backgroundColor: colors.surface,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 6,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "relative" }}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={color}
              />
              {totalItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notificacoes"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "relative" }}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color={color}
              />
              {unreadCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{unreadCount}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    backgroundColor: colors.danger,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  badgeText: {
    color: colors.textWhite,
    fontSize: 10,
    fontWeight: "bold",
  },
});
