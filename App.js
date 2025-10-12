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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
