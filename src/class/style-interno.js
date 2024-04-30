import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center,"
  },
  texto: {
    fontSize: 50,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "blue"



  }

})