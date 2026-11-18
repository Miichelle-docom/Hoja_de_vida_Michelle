import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Props = { icono: keyof typeof Ionicons.glyphMap; titulo: string; descripcion: string };

export default function TarjetaHobby({ icono, titulo, descripcion }: Props) {
  return (
    <View style={styles.tarjeta}>
      <Ionicons name={icono} color="#238636" size={25} />
      <View style={styles.contenido}><Text style={styles.titulo}>{titulo}</Text><Text style={styles.descripcion}>{descripcion}</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#E1E8E3', borderRadius: 14, borderWidth: 1, flexDirection: 'row', gap: 14, marginBottom: 12, padding: 16 },
  contenido: { flex: 1 },
  titulo: { color: '#17251B', fontSize: 16, fontWeight: '700' },
  descripcion: { color: '#617166', fontSize: 14, lineHeight: 20, marginTop: 3 },
});
