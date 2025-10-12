import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import styles from "../styles/splashStyles";

export default function SplashScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

    return () => setTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../../assets/images/logo_app.png")}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Text style={styles.title}>CULTIVE+</Text>
      <Text style={styles.slogan}>
        Tecnologia que impulsiona o seu campo 🌾
      </Text>
    </View>
  );
}
