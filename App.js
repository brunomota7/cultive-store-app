import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./src/features/splash/screen";
import LoginScreen from "./src/features/auth/authScreens/screens/login";
import RegisterScreen from "./src/features/auth/authScreens/screens/register";
import FacebookScreen from "./src/features/auth/socialAuth/screen/facebookScreen";
import GoogleScreen from "./src/features/auth/socialAuth/screen/googleScreen";
import ForgotPassword from "./src/features/auth/forgotPassword/screen/forgotPassword";
import ValidateCode from "./src/features/auth/forgotPassword/screen/validateCode";
import ChangePassword from "./src/features/auth/forgotPassword/screen/changePassword";
import HomeTabs from "./src/navigation/HomeTabs";
import ProductScreenByCategory from "./src/features/home/components/ProductWrapper";
import ProductDetails from "./src/features/product/screen/productDetails";
import { CartProvider } from "./src/context/cartContext";
import ConfirmAddressScreen from "./src/features/checkOutBuy/screen/confirmAddressScreen";
import Payment from "./src/features/checkOutBuy/screen/paymentScreen";
import { NotificationProvider } from "./src/context/notificationContext";
import OrderSuccess from "./src/features/checkOutBuy/screen/orderSuccess";
import NotificationScreen from "./src/features/notifications/screen/notification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NotificationProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Splash"
            >
              <Stack.Screen name="Splash" component={SplashScreen} />

              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="FacebookAuth" component={FacebookScreen} />
              <Stack.Screen name="GoogleAuth" component={GoogleScreen} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="ValidateCode" component={ValidateCode} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />

              <Stack.Screen name="Home" component={HomeTabs} />
              <Stack.Screen
                name="ProductScreenByCategory"
                component={ProductScreenByCategory}
              />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen
                name="ConfirmAddress"
                component={ConfirmAddressScreen}
              />
              <Stack.Screen name="Notificacoes" component={NotificationScreen} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </NotificationProvider>
    </SafeAreaProvider>
  );
}
