import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../../constants/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AddressModal from "../../modals/ModalAddress/addressModal";
import { useNotifications } from "../../../../context/notificationContext";
import { useNavigation } from "@react-navigation/native";
import styles from "./headerHomeStyles";

const user = {
  name: "Bruno",
  address: "R. dos Cedros, 12",
};

export default function HeaderHome() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selectedAddress, setSelectedAddress] = useState(user.address);
  const [modalVisible, setModalVisible] = useState(false);
  const { unreadCount } = useNotifications();
  const navigation = useNavigation();

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

      <View style={styles.row}>
        <View style={{ position: "relative" }}>
          <TouchableOpacity 
            style={styles.notificationBtn}
            onPress={() => navigation.navigate("Notificacoes")}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.btnAddress}
          onPress={() => setModalVisible(true)}
        >
          <MaterialIcons name="expand-more" size={20} color={colors.primary} />
          <Text>{selectedAddress}</Text>
        </TouchableOpacity>
      </View>

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

