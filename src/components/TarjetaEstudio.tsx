import { StyleSheet, Text, View } from 'react-native';

type Props = { titulo: string; institucion: string; enCurso?: boolean };

export default function TarjetaEstudio({ titulo, institucion, enCurso = false }: Props) {
  return (
    <View style={[styles.tarjeta, enCurso ? styles.enCurso : styles.finalizado]}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>{titulo}</Text>
        {enCurso && <Text style={styles.badge}>EN FORMACIÓN</Text>}
      </View>
      <Text style={styles.institucion}>{institucion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: { borderRadius: 14, borderWidth: 1, marginBottom: 12, padding: 16 },
  finalizado: { backgroundColor: '#FFFFFF', borderColor: '#E1E8E3' },
  enCurso: { backgroundColor: '#ECF8EF', borderColor: '#58A667' },
  encabezado: { alignItems: 'flex-start', flexDirection: 'row', gap: 8, justifyContent: 'space-between' },
  titulo: { color: '#17251B', flex: 1, fontSize: 16, fontWeight: '700' },
  institucion: { color: '#617166', fontSize: 14, marginTop: 5 },
  badge: { backgroundColor: '#238636', borderRadius: 20, color: '#FFFFFF', fontSize: 10, fontWeight: '800', overflow: 'hidden', paddingHorizontal: 8, paddingVertical: 4 },
});
