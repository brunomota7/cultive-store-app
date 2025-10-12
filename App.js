import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "./src/constants/colors";
import CustomDrawer from "./src/components/CustomDrawer";
import SplashScreen from "./src/features/splash/screen";
import LoginScreen from "./src/features/auth/authScreens/screens/login";
import RegisterScreen from "./src/features/auth/authScreens/screens/register";
import FacebookScreen from "./src/features/auth/socialAuth/screen/facebookScreen";
import GoogleScreen from "./src/features/auth/socialAuth/screen/googleScreen";
import ForgotPassword from "./src/features/auth/forgotPassword/screen/forgotPassword";
import ValidateCode from "./src/features/auth/forgotPassword/screen/validateCode";
import ChangePassword from "./src/features/auth/forgotPassword/screen/changePassword";
import HomeScreen from "./src/features/home/screen/home";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.background
        },
        drawerActiveBackgroundColor: colors.primary,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

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

          <Stack.Screen name="Home" component={HomeDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
