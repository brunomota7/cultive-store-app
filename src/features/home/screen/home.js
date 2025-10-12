import { View } from "react-native";
import colors from "../../../constants/colors";
import HeaderHome from "../components/HeaderHome";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, paddingTop: 50, backgroundColor: colors.background }}
    >
      <View style={{ flexGrow: 1, padding: 8, justifyContent: "flex-start" }}>
        <HeaderHome navigation={() => navigation.openDrawer()} />
      </View>
    </View>
  );
}
