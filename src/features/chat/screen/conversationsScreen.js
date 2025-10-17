import { useNavigation } from "@react-navigation/native";
import { useChat } from "../../../context/chatContext";
import mockAgricultores from "../../../constants/mockClients";
import styles from "../styles/conversationStyles";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";

export default function ConversationsScreen() {
  const { chats } = useChat();
  const navigation = useNavigation();

  const data = chats
    ? Object.entries(chats).map(([agricultorId, messages]) => {
        const agricultor = mockAgricultores[agricultorId];

        const lastMessage = messages[messages.length - 1]?.text || "";
        return {
          agricultorId,
          name: agricultor?.name || "Agricultor desconhecido",
          avatar:
            agricultor?.avatar ||
            "https://randomuser.me/api/portraits/lego/1.jpg",
          lastMessage,
          count: messages.length,
        };
      })
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="chat"
            size={30}
            color={colors.secondary}
          />
          <Text style={styles.titleHeader}>Conversas</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.agricultorId}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Chat", { agricultorId: item.agricultorId })
              }
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.count}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
