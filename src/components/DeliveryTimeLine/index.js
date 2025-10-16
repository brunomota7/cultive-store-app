import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function DeliveryTimeline() {
  const steps = [
    {
      icon: "store",
      label: "Pedido saiu do agricultor",
      color: colors.success,
    },
    {
      icon: "truck-fast",
      label: "A caminho da sua casa",
      color: colors.success,
    },
    {
      icon: "home-outline",
      label: "Entrega prevista para hoje",
      color: colors.border,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rastreando entrega</Text>

      <View style={styles.timeline}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name={step.icon}
                size={24}
                color={step.color}
              />
              {index < steps.length - 1 && <View style={styles.verticalLine} />}
            </View>
            <Text style={styles.label}>{step.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 16,
  },
  timeline: {
    flexDirection: "column",
    gap: 16,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  iconWrapper: {
    alignItems: "center",
    width: 24,
    position: "relative",
  },
  verticalLine: {
    position: "absolute",
    top: 15,
    left: 11,
    width: 2,
    height: 32,
    backgroundColor: colors.border,
  },
  label: {
    fontSize: 13,
    color: colors.textDark,
    flex: 1,
    paddingTop: 2,
  },
});
