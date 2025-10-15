import { FlatList, Text, View } from "react-native";
import styles from "../styles/notificationStyles";
import { getIcon } from "../../../utils/utils";
import HeaderWrapper from "../../../components/HeaderWrapper";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useNotifications } from "../../../context/notificationContext";

export default function NotificationScreen() {
  const { notifications, markAllAsRead } = useNotifications();

  useFocusEffect(
    useCallback(() => {
      markAllAsRead();
    }, [])
  );

  return (
    <View style={styles.container}>
      {notifications.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Nenhuma notificação no momento.</Text>
        </View>
      ) : (
        <View>
          <HeaderWrapper title={"Notificações"} />
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
              <View style={styles.notificationCard}>
                {getIcon(item.type)}
                <View style={styles.notificationContent}>
                  <Text style={styles.message}>{item.message}</Text>
                  <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
