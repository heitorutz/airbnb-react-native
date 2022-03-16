import { View, TextInput, FlatList, Text, Pressable } from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going? "
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList 
        data={searchResults}
        renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
          <View style={styles.iconContainer}>
            <Entypo name={"location-pin"} size={30}/>
          </View>
            <Text style={styles.locationText}>{item.description}</Text>
        </Pressable>
        )}
      />
    </View>
  )
}

export default DestinationSearchScreen;

