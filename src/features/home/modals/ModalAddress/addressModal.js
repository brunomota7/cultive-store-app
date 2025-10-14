import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../../constants/colors";
import styles from "./addressModalStyle";
import SearchButton from "../../../../components/SearchButton/index";
import { useState } from "react";
import Button from "../../../../components/Button/index";
import ModalAddAddress from "../ModalAddAddress";
import ModalOptions from "../ModalOptions/index";
import ModalEditAddress from "../ModalEditAddress/index";

const mockAddresses = [
  {
    id: 1,
    street: "R. dos Cedros, 12",
    city: "Viana",
    zipCode: "65215-000",
    country: "Brasil",
  },
  {
    id: 2,
    street: "Av. Brasil, 1050",
    city: "Viana",
    zipCode: "65215-000",
    country: "Brasil",
  },
  {
    id: 3,
    street: "Rua das Flores, 88",
    city: "Viana",
    zipCode: "65215-000",
    country: "Brasil",
  },
];

export default function AddressModal({ visible, onClose, onSelectAddress }) {
  const [valueSearch, setValueSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [addresses, setAddresses] = useState(mockAddresses);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [addressInFocus, setAddressInFocus] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [addModalVisble, setAddModalVisible] = useState(false);

  const handleSelect = (id) => {
    setSelectedId(id);
    const selected = addresses.find((addr) => addr.id === id);
    if (selected) {
      onSelectAddress(selected.street);
    }
  };

  const filteredAddresses = addresses.filter((addr) =>
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

  const handleSave = (newAddress) => {
    const nextId = addresses.length + 1;
    const formatted = {
      id: nextId,
      street: `${newAddress.street}, ${newAddress.number}`,
      city: newAddress.city,
      zipCode: newAddress.zipCode,
      country: newAddress.country,
    };
    setAddresses((prev) => [...prev, formatted]);
    setAddModalVisible(false);
  };

  const handleEdit = () => {
    setEditData(addressInFocus);
    setEditMode(true);
    setOptionsVisible(false);
  };

  const handleDelete = () => {
    setAddresses((prev) =>
      prev.filter((addr) => addr.id !== addressInFocus.id)
    );
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
                    <MaterialIcons
                      name="place"
                      size={20}
                      color={colors.textMuted}
                    />
                    <View style={styles.addressInfo}>
                      <Text style={styles.addressText}>{item.street}</Text>
                      <Text style={styles.addressText}>
                        {item.city} • {item.zipCode}
                      </Text>
                      <Text style={styles.addressText}>{item.country}</Text>
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
              onPress={() => setAddModalVisible(true)}
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

        <ModalOptions
          visible={optionsVisible}
          onClose={() => setOptionsVisible(false)}
          title={addressInFocus?.street}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        <ModalAddAddress
          visible={addModalVisble}
          onClose={() => setAddModalVisible(false)}
          handle={handleSave}
        />

        <ModalEditAddress
          address={editData}
          visible={editMode}
          onClose={() => setEditMode(false)}
          onSave={(updated) => {
            setAddresses((prev) =>
              prev.map((addr) =>
                addr.id === addressInFocus.id
                  ? {
                      ...addr,
                      street: `${updated.street}, ${updated.number}`,
                      city: updated.city,
                      zipCode: updated.zipCode,
                      country: updated.country,
                    }
                  : addr
              )
            );
            setEditMode(false);
            setEditData(null);
          }}
        />
      </View>
    </Modal>
  );
}
