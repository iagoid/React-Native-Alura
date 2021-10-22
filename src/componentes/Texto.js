import React from "react"
import { StyleSheet, Text } from "react-native"

export default function Texto({ children, style }) {
    // Passa o estilo vindo do texto superior e o coloca neste
    // Antes ele verifica se o estilo é em negrito ou não
    let estilo = estilos.texto
    // A interrogação verifica se existe um style, se existir faz a verificação
    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

// ATENÇÃO: É necessário colocar o fontWeight, pois algumas fontes não a possuem
// desta maneira se ela fosse definida daria um erro aqui
const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})