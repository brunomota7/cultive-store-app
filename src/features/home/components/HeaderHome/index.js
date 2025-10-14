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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AddressModal from "../../screen/addressModal";

const user = {
  name: "Bruno",
  address: "R. dos Cedros, 12",
};

export default function HeaderHome({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [notificationCount, setNotificationCount] = useState(3);
  const [selectedAddress, setSelectedAddress] = useState(user.address);
  const [modalVisible, setModalVisible] = useState(false);

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
      </Animated.View>

      <TouchableOpacity
        style={styles.btnAddress}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="expand-more" size={18} color={colors.zinc} />
        <Text>{selectedAddress}</Text>
      </TouchableOpacity>

      <AddressModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectAddress={(address) => {
          setSelectedAddress(address);
          setModalVisible(false);
        }}
      />
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
  btnAddress: {
    flexDirection: "row",
    gap: 6,
  },
});
