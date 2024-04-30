import { StyleSheet, Text, View, Image} from 'react-native';
import { styles } from './src/class/style-externo';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.rimuru} source={require("./rimurureact.jpg")}></Image>
      <Text style={styles.texto}>O melhor slime dos animes: Rimuru Tempest</Text>
    </View>

  )}