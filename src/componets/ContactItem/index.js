import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import style from "./style";

export const ContacItem = ({ navigation, evento, data}) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('information', evento)}
    style={style.container}
    >
        <View style={style.left}>
            <Text style={style.dataText}>{data}º</Text>
        </View>
        <View style={style.right}>
            <Text> Nome Evento: {evento.nome}</Text>
            <Text> Data: {evento.data}</Text>
            <Text> Ver mais</Text>
        </View>
    </TouchableOpacity>
);

export default ContacItem;