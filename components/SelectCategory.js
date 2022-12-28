import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

let isMarathi = true

const DATA = [
  {
    id: 'gm',
    title: isMarathi ? 'शुभ सकाळ' :'Good Morning',
    name:'weather-sunny',
    color:'#ffe87c'
  },
  {
    id: 'gn',
    title: isMarathi ? 'शुभ रात्री' : 'Good Night',
    name:'weather-night',
    color:'#fefcd7'
  },
  {
    id: 'hbd',
    title: isMarathi ? 'वाढदिवसाच्या शुभेच्छा' : 'Happy Birthday',
    name:'baby-face-outline',
    color:'#ffdbbb'
  },
  {
    id: 'ha',
    title: isMarathi ? 'लग्नाचा वाढदिवस' :'Happy Anniversary',
    name:'cake',
    color:'#fc5a8d'
  },
  {
    id: 'fam',
    title: isMarathi ? 'कुटुंब' :'Family',
    name:'human-male-female-child',
    color:'#909eb4'
  },
  {
    id: 'mot',
    title: isMarathi ? 'प्रेरणादायी' : 'Motivational',
    name:'heart-flash',
    color:'red'
  },
  {
    id: 'bus',
    title: isMarathi ? 'व्यवसाय' :'Business',
    name:'cash-multiple',
    color:'#25d366'
  },
  {
    id: 'frd',
    title: isMarathi ? 'मैत्री' :'Friend',
    name:'crowd',
    color:'#e8c5c1'
  },
  {
    id: 'suc',
    title: isMarathi ? 'यश' :'Success',
    name:'weight-lifter',
    color:'orange'
  },
  {
    id: 'oth',
    title: isMarathi ? 'इतर' :'Other',
    name:'emoticon-happy',
    color:'#ffc964'
  },
];

const Item = ({title,name,color, navigation}) => (
  <Pressable onPress={() => navigation.navigate('Quote Page', {name: title})}>
    <View style={styles.item}>
      <View
        style={{
          color: '#000',
          height: '50%',
           backgroundColor: 'black',
          width: '100%',
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <MaterialCommunityIcons name={name} color={color} size={60} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Pressable>
);

const SelectCategory = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} name={item.name} color={item.color} navigation={navigation} />
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    width: 170,
    height: 170,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    padding: 5,
    height: '50%',
    backgroundColor: 'teal',
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default SelectCategory;
