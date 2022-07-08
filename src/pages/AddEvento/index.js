import React, { useState } from "react";
import { Text, TextInput, Button, Alert, Pressable, Keyboard } from 'react-native';
import { ContactRepository } from '../../repository/ContactRepository';
import style from './style';

export const AddEvento = ({ navigation }) => {
    const [ nome_evento, setNome_evento] = useState ('');
    const [ data, setData ] = useState ('');
    const [ hora, setHora ] = useState ('');
    const [ descricao, setDescricao ] = useState ('');

    const saveHandler = () => {

        if ([ nome_evento, data, hora, descricao].some(value => value.trim() === '')) {
            Alert.alert('Campo obrigatórios', 'Por favor preencha todos os campo');
            return;
        }
        ContactRepository
        .store ({ nome_evento, data, hora, descricao })
        .then(
            (saved) => {
                if (saved) {
                    Alert.alert('Cadastro com sucesso!')
                    
                    setNome_evento('');
                    setData('');
                    setHora('');
                    setDescricao('');
                } else {
                    alert('Algum problema ocorreu ao cadastrar');
                }
            },
            () => { alert('Algum problema ocorreu ao cadastrar!'); }
        );
    }

    return (
        <Pressable style={style.container} onPress={Keyboard.dismiss}>
            <Text style={style.label}>Nome do Evento</Text>
            <TextInput style={style.input} onChange={(event) => setNome_evento(event.nativeEvent.text)} value={nome_evento}/>
            <Text style={style.label}>Data</Text>
            <TextInput style={style.input} onChange={(event) => setData(event.nativeEvent.text)} value={data}/>
            <Text style={style.label}>Hora</Text>
            <TextInput style={style.input} onChange={(event) => setHora(event.nativeEvent.text)} value={hora}/>
            <Text style={style.label}>Descrição</Text>
            <TextInput style={style.input} onChange={(event) => setDescricao(event.nativeEvent.text)} value={descricao}/>
            <Button
                title="Cadastrar"
                onPress={saveHandler}
                />
        </Pressable>
    )
};

export default AddEvento