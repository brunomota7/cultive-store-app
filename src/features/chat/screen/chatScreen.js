import { useNavigation, useRoute } from "@react-navigation/native";
import { useChat } from "../../../context/chatContext";
import { useEffect, useState } from "react";
import mockAgricultores from "../../../constants/mockClients";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import styles from "../styles/chatStyles";

export default function ChatScreen() {
  const { agricultorId } = useRoute().params;
  const navigation = useNavigation();
  const { chats, sendMessage, markAsRead } = useChat();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    markAsRead(agricultorId);
  }, [agricultorId]);

  const messages = (chats[agricultorId] || [])
    .slice()
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const agricultor = mockAgricultores[agricultorId] || {
    name: "Agricultor desconhecido",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendMessage(agricultorId, inputText);
    setInputText("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      //keyboardVerticalOffset={2}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Image source={{ uri: agricultor.avatar }} style={styles.avatar} />
          <Text style={styles.headerName}>{agricultor.name}</Text>
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesContainer}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.sender === "comprador"
                  ? styles.agricultorBubble
                  : styles.compradorBubble,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timestamp}>
                {item.timestamp.slice(11, 16)}
              </Text>
            </View>
          )}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Digite sua mensagem..."
            placeholderTextColor={colors.textMuted}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <MaterialCommunityIcons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
