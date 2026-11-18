import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  texto: string;
  icono: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
};

export default function MiBoton({ texto, icono, color, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={texto}
      onPress={onPress}
      style={({ pressed }) => [styles.boton, { backgroundColor: color }, pressed && styles.presionado]}
    >
      <Ionicons name={icono} size={19} color="#FFFFFF" />
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: { alignItems: 'center', borderRadius: 12, flexDirection: 'row', gap: 9, justifyContent: 'center', minHeight: 48, paddingHorizontal: 16 },
  presionado: { opacity: 0.8, transform: [{ scale: 0.985 }] },
  texto: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});
