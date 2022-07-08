import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export const Information = ({ route }) => {
    const {nome_evento, data, hora, descricao } = route.params;

    return (
        <View style={style.container}>
            <Text>Nome do Evento: { nome_evento}</Text>
            <Text>Data: {data}</Text>
            <Text>hora: {hora}</Text>
            <Text>Descrição: {descricao}</Text>
        </View>

    )
};

export default Information;