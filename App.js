
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
import HomeScreen from "./src/features/home/screen/home";
import HomeTabs from "./src/navigation/HomeTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
