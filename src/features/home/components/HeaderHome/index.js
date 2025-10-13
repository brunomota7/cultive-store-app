import { useEffect, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HeaderHome({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.header}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.logoText}>Cultive+</Text>
        {/* <Text style={styles.subTitleText}>Store</Text> */}
      </Animated.View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Notifications")}
        style={styles.notificationBtn}
      >
        <MaterialCommunityIcons
          name="bell-outline"
          size={22}
          color={colors.zinc}
        />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  menuButton: {
    alignSelf: "flex-start",
    padding: 8,
  },
  menuIcon: {
    fontSize: 30,
    color: colors.textDark,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    color: colors.secondary,
  },
  subTitleText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 2,
    color: colors.accentOrange,
  },
  notificationBtn: {
    position: "relative",
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.surface,
  },
  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: colors.danger,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: colors.textWhite,
    fontSize: 10,
    fontWeight: "bold",
  },
});
