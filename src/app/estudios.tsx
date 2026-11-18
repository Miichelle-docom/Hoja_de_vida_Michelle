import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TarjetaEstudio from '@/components/TarjetaEstudio';

const estudios = [
  ['Tecnóloga en formación', 'SENA', true],
  ['Técnica en Programación de Software', 'SENA', false],
  ['Certificación en HTML', 'Formación complementaria', false],
  ['Certificación en CSS', 'Formación complementaria', false],
  ['Certificación en Python 1 y 2', 'Formación complementaria', false],
  ['Inglés', 'SENA', false],
  ['Excel básico', 'SENA', false],
] as const;

export default function Estudios() {
  return <ScrollView contentContainerStyle={styles.contenedor}>
    <View style={styles.hero}><Text style={styles.titulo}>Formación y certificaciones</Text><Text style={styles.subtitulo}>Conocimientos que fortalecen mi perfil profesional.</Text></View>
    {estudios.map(([titulo, institucion, enCurso]) => <TarjetaEstudio key={titulo} titulo={titulo} institucion={institucion} enCurso={enCurso} />)}
  </ScrollView>;
}

const styles = StyleSheet.create({
  contenedor: { backgroundColor: '#F6F9F6', flexGrow: 1, padding: 20, paddingBottom: 32 },
  hero: { marginBottom: 19 },
  titulo: { color: '#17251B', fontSize: 22, fontWeight: '800' },
  subtitulo: { color: '#617166', fontSize: 14, lineHeight: 20, marginTop: 6 },
});
