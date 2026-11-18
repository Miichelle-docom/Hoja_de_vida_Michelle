import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TarjetaExperiencia from '@/components/TarjetaExperiencia';

export default function Experiencia() {
  return <ScrollView contentContainerStyle={styles.contenedor}>
    <View style={styles.hero}><Text style={styles.titulo}>Experiencia laboral</Text><Text style={styles.subtitulo}>Experiencias que han fortalecido mis habilidades personales y profesionales.</Text></View>
    <TarjetaExperiencia cargo="Atención al cliente" descripcion="Atención y acompañamiento a clientes, identificación de necesidades y comunicación clara para ofrecer un servicio oportuno." />
    <TarjetaExperiencia cargo="Operaria en confección" descripcion="Apoyo en procesos de confección, manejo responsable de materiales y cumplimiento de estándares de calidad." />
  </ScrollView>;
}

const styles = StyleSheet.create({
  contenedor: { backgroundColor: '#F6F9F6', flexGrow: 1, padding: 20, paddingBottom: 32 },
  hero: { marginBottom: 19 },
  titulo: { color: '#17251B', fontSize: 22, fontWeight: '800' },
  subtitulo: { color: '#617166', fontSize: 14, lineHeight: 20, marginTop: 6 },
});
