import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <scrollView>
            <Topo {...topo} />

            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Itens {...itens} />
            </View>
        </scrollView>
    
    )}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    lista: {
        paddingHorizontal: 16,
    }
});