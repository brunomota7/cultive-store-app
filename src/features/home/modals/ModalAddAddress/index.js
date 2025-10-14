import { StyleSheet, Text, View } from "react-native";
import ModalWrapper from "../../../../components/ModalWrapper";
import { TextInput } from "react-native";
import Button from "../../../../components/Button";
import colors from "../../../../constants/colors";
import { useState } from "react";

export default function ModalAddAddress({ visible, onClose, handle }) {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("Brasil");

  return (
    <ModalWrapper
      visible={visible}
      titleHeader={"Novo endereço"}
      onClose={onClose}
    >
      <View style={styles.addContent}>
        <View style={styles.formContent}>
          <View style={styles.form}>
            <Text style={styles.label}>Rua</Text>
            <TextInput
              placeholder="ex: Rua X"
              placeholderTextColor={colors.textMuted}
              value={street}
              onChangeText={setStreet}
              style={styles.input}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>N°</Text>
            <TextInput
              placeholder="ex: 10"
              placeholderTextColor={colors.textMuted}
              value={number}
              onChangeText={setNumber}
              style={styles.input}
            />
          </View>
        </View>

        <View style={[styles.formContent, { marginTop: 10 }]}>
          <View style={styles.form}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              placeholder="ex: Viana"
              placeholderTextColor={colors.textMuted}
              value={city}
              onChangeText={setCity}
              style={styles.input}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
              placeholder="ex: 00000-000"
              placeholderTextColor={colors.textMuted}
              value={zipCode}
              onChangeText={setZipCode}
              style={styles.input}
            />
          </View>
        </View>

        <View style={[styles.form, { marginTop: 10, width: "100%" }]}>
          <Text style={styles.label}>País</Text>
          <TextInput
            placeholder="ex: Brasil"
            placeholderTextColor={colors.textMuted}
            value={country}
            onChangeText={setCountry}
            style={[styles.input, { width: "100%" }]}
          />

          <Button
            label={"Salvar"}
            onPress={() =>
              handle({
                street,
                number,
                city,
                zipCode,
                country,
              })
            }
            style={{
              marginTop: 10,
            }}
          />
        </View>
      </View>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  addContent: {
    padding: 16,
  },
  formContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  form: {
    alignItems: "flex-start",
    gap: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
  },
  input: {
    width: 150,
    height: 45,
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.textMuted,
  },
});
