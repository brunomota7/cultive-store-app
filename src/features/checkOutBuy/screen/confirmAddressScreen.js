import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styles from "../styles/confirmAddressStyles";
import HeaderWrapper from "../../../components/HeaderWrapper";
import SearchButton from "../../../components/SearchButton";
import colors from "../../../constants/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import Button from "../../../components/Button";
import ModalOptions from "../../home/modals/ModalOptions";
import ModalAddAddress from "../../home/modals/ModalAddAddress";
import ModalEditAddress from "../../home/modals/ModalEditAddress";
import { useCart } from "../../../context/cartContext";

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

export default function ConfirmAddressScreen() {
  const navigation = useNavigation();
  const { cartItems, totalPrice } = useCart();
  const [valueSearch, setValueSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [addresses, setAddresses] = useState(mockAddresses);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [addressInFocus, setAddressInFocus] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const filteredAddresses = addresses.filter((addr) =>
    addr.street.toLowerCase().includes(valueSearch.toLowerCase())
  );

  const openOptions = (address) => {
    setAddressInFocus(address);
    setOptionsVisible(true);
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

  const handleConfirm = () => {
    const selected = addresses.find((addr) => addr.id === selectedId);
    if (selected) {
      navigation.navigate("Payment", {
        cartItems,
        totalPrice,
        address: selected,
      });
    }
  };

  return (
    <View style={styles.container}>
      <HeaderWrapper
        title="Endereço de entrega"
        navigation={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <Text style={styles.label}>Confirme seu endereço de entrega</Text>

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
          style={{ marginBottom: 10, marginTop: 10 }}
        />

        <Button
          onPress={handleConfirm}
          label={"Confirmar endereço"}
          style={{
            backgroundColor: colors.secondary,
          }}
        />
      </View>

      <ModalOptions
        visible={optionsVisible}
        onClose={() => setOptionsVisible(false)}
        title={addressInFocus?.street}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <ModalAddAddress
        visible={addModalVisible}
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
  );
}
