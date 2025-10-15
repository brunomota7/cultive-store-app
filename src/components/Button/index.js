import { Text, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

export default function Button({ onPress, label, icon, style, styleText }) {
  return (
    <TouchableOpacity
      style={[
        {
          alignSelf: "stretch",
          height: 50,
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          borderRadius: 8,
          backgroundColor: colors.primaryLight,
        },
        style,
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        style={[{
          fontSize: 16,
          fontWeight: "700",
          color: colors.textWhite,
        }, styleText]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
