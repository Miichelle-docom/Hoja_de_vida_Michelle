import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TarjetaHobby from '@/components/TarjetaHobby';

export default function Intereses() {
  return <ScrollView contentContainerStyle={styles.contenedor}>
    <View style={styles.hero}><Text style={styles.titulo}>Intereses</Text><Text style={styles.subtitulo}>Áreas que complementan mi desarrollo y crecimiento profesional.</Text></View>
    <TarjetaHobby icono="code-slash-outline" titulo="Programación" descripcion="Interés en seguir aprendiendo tecnologías para crear soluciones digitales." />
    <TarjetaHobby icono="language-outline" titulo="Inglés" descripcion="Práctica continua para ampliar mis oportunidades de comunicación y aprendizaje." />
    <TarjetaHobby icono="people-outline" titulo="Servicio" descripcion="Disfruto colaborar, atender necesidades y aportar experiencias positivas." />
  </ScrollView>;
}

const styles = StyleSheet.create({
  contenedor: { backgroundColor: '#F6F9F6', flexGrow: 1, padding: 20, paddingBottom: 32 },
  hero: { marginBottom: 19 },
  titulo: { color: '#17251B', fontSize: 22, fontWeight: '800' },
  subtitulo: { color: '#617166', fontSize: 14, lineHeight: 20, marginTop: 6 },
});
