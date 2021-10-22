import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Topo from './componentes/Topo'
import Texto from "../../componentes/Texto"
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'


// O FlatList cria a renderização da lista antes, pois este item não pode ficar dentro de uma ScrollView
export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList style={estilos.lista}
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ id }) => id.toString()}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>

}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontWeight: "bold",
    },
    lista: {
        paddingHorizontal: 16
    }
})