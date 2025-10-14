import { Modal, Text, TouchableOpacity, View, FlatList } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import styles from "../styles/addressModalStyle";
import SearchButton from "../../../components/SearchButton";
import { useState } from "react";
import ModalWrapper from "../../../components/ModalWrapper";
import Button from "../../../components/Button";

const mockAddresses = [
  { id: 1, street: "R. dos Cedros, 12" },
  { id: 2, street: "Av. Brasil, 1050" },
  { id: 3, street: "Rua das Flores, 88" },
];

export default function AddressModal({ visible, onClose, onSelectAddress }) {
  const [valueSearch, setValueSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [addressInFocus, setAddressInFocus] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    const selected = mockAddresses.find((addr) => addr.id === id);
    if (selected) {
      onSelectAddress(selected.street);
    }
  };

  const filteredAddresses = mockAddresses.filter((addr) =>
    addr.street.toLowerCase().includes(valueSearch.toLowerCase())
  );

  const openOptions = (address) => {
    setAddressInFocus(address);
    setOptionsVisible(true);
  };

  const closeOptions = () => {
    setAddressInFocus(null);
    setOptionsVisible(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalBody}>
          <TouchableOpacity onPress={onClose} style={styles.headerBtn}>
            <MaterialIcons
              name="expand-more"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.headerText}>ENDEREÇO DE ENTREGA</Text>
          </TouchableOpacity>

          <View style={styles.content}>
            <SearchButton
              value={valueSearch}
              onChangeText={setValueSearch}
              placeholder={"Buscar endereço"}
              colorIcon={colors.secondary}
            />

            <FlatList
              data={filteredAddresses}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                const isSelected = selectedId === item.id;
                return (
                  <TouchableOpacity
                    style={[
                      styles.addressCard,
                      isSelected && styles.addressCardSelected,
                    ]}
                    onPress={() => handleSelect(item.id)}
                  >
                    <View style={styles.addressInfo}>
                      <MaterialIcons
                        name="place"
                        size={20}
                        color={colors.textMuted}
                      />
                      <Text style={styles.addressText}>{item.street}</Text>
                    </View>

                    <View style={styles.cardActions}>
                      {isSelected && (
                        <MaterialIcons
                          name="check-circle"
                          size={20}
                          color={colors.success}
                        />
                      )}
                      <TouchableOpacity onPress={() => openOptions(item)}>
                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={20}
                          color={colors.textMuted}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />

            <Button
              onPress={""}
              label={"Cadastrar novo endereço"}
              icon={
                <MaterialIcons
                  name="add-location-alt"
                  size={20}
                  color={colors.textWhite}
                />
              }
              style={{
                marginBottom: 16,
              }}
            />
          </View>
        </View>

        {/* Options Modal */}
        <ModalWrapper
          visible={optionsVisible}
          titleHeader={addressInFocus?.street}
        >
          <View style={styles.contentOption}>
            <TouchableOpacity style={styles.optionBtn}>
              <MaterialCommunityIcons
                name="pencil"
                size={18}
                color={colors.textDark}
              />
              <Text style={styles.optionText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn}>
              <MaterialCommunityIcons
                name="trash-can"
                size={18}
                color={colors.textDark}
              />
              <Text style={styles.optionText}>Excluir</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cancelBtn} onPress={closeOptions}>
            <Text
              style={[
                { color: colors.textMuted, fontSize: 16, color: colors.danger },
              ]}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </ModalWrapper>
      </View>
    </Modal>
  );
}
