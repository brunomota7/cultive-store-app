import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import colors from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const drawerItem = [
  { label: "Perfil", icon: "account", route: "Perfil" },
  { label: "Troca de Senha", icon: "lock", route: "ChangePassword" },
  { label: "Sair", icon: "logout", route: "Login" },
];

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: colors.background }}
    >
      {drawerItem.map((item) => (
        <DrawerItem
          key={item.label}
          label={item.label}
          icon={() => (
            <MaterialCommunityIcons
              name={item.icon}
              size={22}
              color={colors.primaryLight}
            />
          )}
          labelStyle={{ color: colors.primaryLight, fontSize: 14 }}
          onPress={() => props.navigation.navigate(item.route)}
          style={{ borderRadius: 8 }}
        />
      ))}
    </DrawerContentScrollView>
  );
}
