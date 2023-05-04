
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/participant';

import { useState } from 'react';

import { styles } from './styles';

export function Home() {

  const [participants, setParticipants] = useState<string[]>();
  const [participantName, setParticipantName] = useState('');

  //Botão de adicionar Participante
  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante Existe", "Ja existe um participante com esse nome")
    }

   setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');

  }

  function handleParticipantRemove(name: string) {
    console.log("Nome do usuário: ", name);
    Alert.alert("Remover", `Voce tem certeza que deseja remover participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => participants.filter(participant => participant !== name))
      }
      , {
        text: "Não",
        style: 'cancel',
      }
    ])

  }

  return (
    <View style={styles.container} >

      <Text style={styles.text}>Nome do Evento</Text>
      <Text style={styles.textDate}>Sexta, 23 de Março de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)} 
          />
          )}   
        showsVerticalScrollIndicator={false}

        ListEmptyComponent={()=>(
          <Text style ={styles.listEmptyText}>
            Nenhum participante cadastrado.
          </Text>
        )}
      />
    </View>
  );
}