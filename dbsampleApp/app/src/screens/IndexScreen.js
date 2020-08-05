import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import {Context}  from '../context/BlogContext'
import Icon from 'react-native-vector-icons/Feather';
import AddIcon from 'react-native-vector-icons/Ionicons'
import ShowScreen from './ShowScreen';
import { useNavigation } from '@react-navigation/native'
import CreateBlogScreen from '../screens/createBlogScreen'


const IndexScreen = ({navigation}) => {
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity onPress={() => navigation.navigate('CreateBlogScreen')}>
                <AddIcon  name="add" size={40} color="white" paddingHorizontal= '30' />
                </TouchableOpacity>
            ),
        });
    },[navigation]);


const {state,deleteBlogPost} = useContext(Context);
    return (
        <View>
       <FlatList data={state}
       contentContainerStyle={{paddingBottom: 40}}
       keyExtractor={(blogPost) => blogPost.title}
       renderItem={({item}) => {
       return  <TouchableOpacity onPress={() => navigation.navigate('ShowScreen',{itemId:item.id})}>
       <View style={styles.row}>
       <Text style={styles.title}>{item.title} - {item.id} --- {item.content}</Text>
           <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
           <Icon name="trash" style={styles.icon} size={50} color="red" />
           </TouchableOpacity>
           </View>
           </TouchableOpacity>
       }}
       />
      </View>
    )
}

const styles = StyleSheet.create({

    listStyle :{
        paddingBottom: 20
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'gray',
        
    },
    title:{
        fontSize : 18,
        width: '90%'
    },
    icon:{
        fontSize : 24,
    }



});

export default IndexScreen;