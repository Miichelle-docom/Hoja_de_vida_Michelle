import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
  index: 'person-outline',
  estudios: 'school-outline',
  experiencia: 'briefcase-outline',
  hobbies: 'heart-outline',
};

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerShadowVisible: false,
        headerTitleStyle: { color: '#17251B', fontWeight: '700' },
        tabBarActiveTintColor: '#238636',
        tabBarInactiveTintColor: '#778379',
        tabBarStyle: { borderTopColor: '#E1E8E3', height: 64, paddingTop: 5 },
        tabBarIcon: ({ color, size }) => <Ionicons name={icons[route.name]} color={typeof color === 'number' ? '#238636' : color ?? '#238636'} size={size} />,
      })}>
        <Tabs.Screen name="index" options={{ title: 'Perfil', headerTitle: 'Datos personales' }} />
        <Tabs.Screen name="estudios" options={{ title: 'Estudios', headerTitle: 'Formación académica' }} />
        <Tabs.Screen name="experiencia" options={{ title: 'Experiencia', headerTitle: 'Experiencia laboral' }} />
        <Tabs.Screen name="hobbies" options={{ title: 'Intereses', headerTitle: 'Intereses' }} />
      </Tabs>
    </>
  );
}
