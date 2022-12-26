import * as React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';

const DATA = [
  {
    id: 'gm',
    title: 'Good Morning',
  },
  {
    id: 'gn',
    title: 'Good Night',
  },
  {
    id: 'hbd',
    title: 'Happy Birthday',
  },
  {
    id: 'ha',
    title: 'Happy Anniversary',
  },
  {
    id: 'fam',
    title: 'Family',
  },
  {
    id: 'mot',
    title: 'Motivational',
  },
  {
    id: 'bus',
    title: 'Business',
  },
  {
    id: 'frd',
    title: 'Friend',
  },
  {
    id: 'suc',
    title: 'Success',
  },
  {
    id: 'oth',
    title: 'Other',
  },
];

const Item = ({title, navigation}) => (
  <Pressable onPress={() => navigation.navigate('Quote Page', {name: title})}>
    <View style={styles.item}>
      <Text
        style={{
          color: '#000',
          height: '50%',
          backgroundColor: 'red',
          width: '100%',
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        }}>
        ICON
      </Text>
      {/* <View style={{backgroundColor:'red'}}> */}
      <Text style={styles.title}>{title}</Text>
      {/* </View> */}
    </View>
  </Pressable>
);

const SelectCategory = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} navigation={navigation} />
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
      }}>
      {/* <Text style={{color:'#000'}}>Select Category</Text> */}
      {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
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
    // textAlign:'left'
  },
});

export default SelectCategory;
