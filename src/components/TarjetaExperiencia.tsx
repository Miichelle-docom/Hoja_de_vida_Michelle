import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Props = { cargo: string; descripcion: string };

export default function TarjetaExperiencia({ cargo, descripcion }: Props) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.icono}><Ionicons name="briefcase-outline" size={22} color="#238636" /></View>
      <View style={styles.contenido}>
        <Text style={styles.cargo}>{cargo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#FFFFFF', borderColor: '#E1E8E3', borderRadius: 14, borderWidth: 1, flexDirection: 'row', gap: 13, marginBottom: 13, padding: 16 },
  icono: { alignItems: 'center', backgroundColor: '#EAF6EC', borderRadius: 12, height: 46, justifyContent: 'center', width: 46 },
  contenido: { flex: 1 },
  cargo: { color: '#17251B', fontSize: 16, fontWeight: '700' },
  descripcion: { color: '#617166', fontSize: 14, lineHeight: 20, marginTop: 5 },
});
