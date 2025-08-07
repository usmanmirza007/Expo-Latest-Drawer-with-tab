import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="(tab)" options={{ headerTitle: "Main" }} />
    </Drawer>
  );
}
