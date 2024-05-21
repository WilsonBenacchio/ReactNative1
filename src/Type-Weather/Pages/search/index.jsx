import React from "react";
import { Container, HeaderContainer, HeaderImg, HeaderTittle, Input, Subtitle, TittleColored, TittleContainer, TittleText, } from './styles'
import { ImageBackground } from "react-native";

import Back from "../../assets/Back.png"
import cloud from "../../assets/cloud.png"

export default function Search () {
    return (
        <Container source={Back} resizeMode="cover">
            <HeaderContainer>
                <HeaderImg source={cloud} />
                <HeaderTittle>TypeWeather</HeaderTittle>
            </HeaderContainer>
            <TittleContainer>
                <TittleText>
                    Boas Vindas ao <TittleColored>TypeWeather</TittleColored>
                </TittleText>
                <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
            </TittleContainer>
            <Input>Buscar Local</Input>
        </Container>

)

}