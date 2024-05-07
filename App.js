// import { Platform, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { PageContainer, PageSubTittle, PageTittle, PageImage } from "./src/class/styled-externo";

export default function App() {
  return (
      <PageImage resizeMode="cover" source={Platform.OS === "android" ? require("./evelynnbk.jpg") : require("./rimurureact.jpg")}>

<PageTittle>O que vislumbras ao me contemplar?</PageTittle>
        <PageSubTittle>Uma bruxa? Uma deusa? Ou algo mais...</PageSubTittle>
      </PageImage>
    
  );
}

// const styles = StyleSheet.create({
// container: {
//   Flex: 1,
//   backgroundColor: Platform.OS === 'android' ? 'black' : 'white'
// }
// })