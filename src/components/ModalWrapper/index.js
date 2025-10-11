import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../constants/colors";
import HeaderWrapper from "../HeaderWrapper";

export default function ModalWrapper({
  children,
  visible,
  titleHeader,
  onClose,
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.overlay}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.content}>
            <HeaderWrapper title={titleHeader} navigation={onClose} />

            <View style={styles.main}>{children}</View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.rgba,
  },
  content: {
    height: "auto",
    width: "100%",
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  main: {
    padding: 10,
  },
});
