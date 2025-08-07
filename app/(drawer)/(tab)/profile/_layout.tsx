import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  
  return (
      <Stack initialRouteName='profile' screenOptions={{}}>
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="[userId]" options={{ headerShown: false }} />
      </Stack>
  );
}

