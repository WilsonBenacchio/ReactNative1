// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ {display: "flex", 
    flex: 1,
    display: "flex",
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "blue"
    }}
    >
      <Text style= {{
      FontSize: 50, 
      fontWeight: "bold", 
      color: "white"}}
      >
        INDMO</Text>
      <Text>Hello World!
      </Text>
    </View>
  );
}

// style={styles.container} Fica do lado do primeiro View
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "blue",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tittle: {
//     color: "red",
//     fontSize: 100,
//   }
// });
