import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../constants/colors";

export default function ScreenWrapper({ children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar barStyle="default" backgroundColor={colors.background} />

        <View style={styles.content}>
          <Image
            source={require("../../../assets/images/logo_app.png")}
            style={{
              marginBottom: 10,
            }}
          />
          <Text style={styles.logoText}>CULTIVE+</Text>
          <Text style={styles.slogan}>
            Tecnologia que impulsiona o seu campo
          </Text>

          {children}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 8,
    color: colors.primary,
  },
  slogan: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.secondary,
    marginBottom: 50,
  },
  content: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
