import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.ImageBackground`
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
margin: 20px 0 0 0;
`

export const HeaderContainer = styled.View`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-top: 68px;

`

export const HeaderImg = styled.Image`
width: 36px;
height: 24px;


`

export const TittleText = styled.Text`
font-size: 20px;
color: #FAFAFA;
font-weight: bold;

`

export const HeaderTittle = styled.Text`
color: aliceblue;
font-size: 20px;
font-weight: bold;

`
export const TittleContainer = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 311px;

`


export const Subtitle = styled.Text`
font-size: 14px;
font-weight: normal;
color: aliceblue;

`

export const TittleColored = styled.Text`
font-size: 20px;
color: #8fb2f5;
font-weight: bold;

`

export const Input = styled.TextInput`
margin-top: 32px;
color: white;
width: 311px;
height: 36px;
padding-left: 20px;
background-color: #1e1e29;
`