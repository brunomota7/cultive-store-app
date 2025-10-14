import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalWrapper from "../../../../components/ModalWrapper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../../constants/colors";

export default function ModalOptions({ visible, title, onClose, handleEdit, handleDelete }) {
  return (
    <ModalWrapper visible={visible} titleHeader={title}>
      <View style={styles.contentOption}>
        <TouchableOpacity style={styles.optionBtn} onPress={handleEdit}>
          <MaterialCommunityIcons
            name="pencil"
            size={18}
            color={colors.textDark}
          />
          <Text style={styles.optionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn} onPress={handleDelete}>
          <MaterialCommunityIcons
            name="trash-can"
            size={18}
            color={colors.textDark}
          />
          <Text style={styles.optionText}>Excluir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
        <Text
          style={[
            { color: colors.textMuted, fontSize: 16, color: colors.danger },
          ]}
        >
          Cancelar
        </Text>
      </TouchableOpacity>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  contentOption: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionsBox: {
    backgroundColor: colors.background,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.textDark,
  },
  optionBtn: {
    width: 130,
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
  },
  optionText: {
    fontSize: 15,
    color: colors.textDark,
    fontWeight: "500",
  },
  cancelBtn: {
    marginVertical: 20,
    alignItems: "center",
  },
});
