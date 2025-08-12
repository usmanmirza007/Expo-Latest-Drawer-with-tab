import CustomDrawerContent from '@/components/CustomDrawerContent';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(tab)" />
    </Drawer>
  );
}
