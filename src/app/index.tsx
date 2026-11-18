import { Ionicons } from '@expo/vector-icons';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import MiBoton from '@/components/MiBoton';

const mostrarContacto = (medio: string) => Alert.alert('Contacto', `Aquí podrás agregar el enlace o dato de ${medio}.`);

export default function Perfil() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View style={styles.perfil}>
        <View style={styles.avatar}><Ionicons name="person" size={54} color="#FFFFFF" /></View>
        <Text style={styles.nombre}>Danna Michelle{`\n`}Campos Samacá</Text>
        <Text style={styles.rol}>Tecnóloga en formación</Text>
      </View>
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Perfil profesional</Text>
        <Text style={styles.parrafo}>Técnica en Programación de Software, con formación en desarrollo web y bases de programación. Me caracterizo por mi atención al detalle, compromiso y orientación al servicio.</Text>
      </View>
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Contacto</Text>
        <View style={styles.botones}>
          <MiBoton texto="Enviar correo" icono="mail-outline" color="#2D8A45" onPress={() => mostrarContacto('correo electrónico')} />
          <MiBoton texto="Llamar" icono="call-outline" color="#3569C8" onPress={() => mostrarContacto('número telefónico')} />
          <MiBoton texto="Ver perfil LinkedIn" icono="logo-linkedin" color="#0A66C2" onPress={() => mostrarContacto('LinkedIn')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { backgroundColor: '#F6F9F6', flexGrow: 1, padding: 20, paddingBottom: 32 },
  perfil: { alignItems: 'center', marginBottom: 24, marginTop: 10 },
  avatar: { alignItems: 'center', backgroundColor: '#238636', borderRadius: 52, height: 104, justifyContent: 'center', marginBottom: 14, width: 104 },
  nombre: { color: '#17251B', fontSize: 24, fontWeight: '800', lineHeight: 29, textAlign: 'center' },
  rol: { color: '#238636', fontSize: 15, fontWeight: '700', marginTop: 5 },
  tarjeta: { backgroundColor: '#FFFFFF', borderColor: '#E1E8E3', borderRadius: 16, borderWidth: 1, marginBottom: 15, padding: 18 },
  titulo: { color: '#17251B', fontSize: 17, fontWeight: '800', marginBottom: 9 },
  parrafo: { color: '#526057', fontSize: 15, lineHeight: 22 },
  botones: { gap: 10 },
});
