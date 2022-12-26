import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

let testData =
  'आयुष्यात जिंकाल तर असे जिंका, कि जणू जिंकण्याची सवयच आहे, आणि हराल तर असे हरा कि जिंकून कंटाळा आल्याने गंमत म्हणून हरलो आहे.';

const CardUI = ({title}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardImg}>
        <Text style={styles.quoteText}>{testData}</Text>
        <Text style={styles.quoteAuthor}> - निनावी </Text>
      </View>
      <View style={styles.actionBtns}>
        <View>
          <Icon name="thumbs-up-outline" size={30} color='black'/>
        </View>
        <View>
        <Icon name="download-outline" size={30} color='black'/>
        </View>
        <View>
        <Icon name="copy-outline" size={30} color='black'/>
        </View>
        <View>
        <Icon name="share-social-outline" size={30} color='black'/>
        </View>
      </View>
    </View>
  );
};

const DisplayQuotes = ({route, navigation}) => {
  const {name} = route.params;

  const renderItem = ({item}) => <CardUI title={item} />;

  console.log('NAVIGATION', name);
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  cardView: {
    height: 400,
    margin: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardImg: {
    height: '85%',
    backgroundColor: 'black',
    borderTopRightRadius: 20,
    padding: 20,
  },
  quoteText: {
    fontSize: 30,
    color: 'white',
    height: '90%',
  },
  quoteAuthor: {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',
    textAlign: 'right',
    height: '10%',
  },
  actionBtns: {
    height: '15%',
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  actionBtnsText: {
    color: 'black',
    fontSize: 30,
  },
});
export default DisplayQuotes;
