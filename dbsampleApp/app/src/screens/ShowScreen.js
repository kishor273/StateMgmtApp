import React, {Component,useContext} from 'react';
import {View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext' 
import EditBlogScreen from '../screens/EditBlogScreen'
import EditIcon from 'react-native-vector-icons/Feather'
const ShowScreen = ({route, navigation}) => {
  const{ state } = useContext(Context);
  const { itemId } = route.params;
  React.useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>(
            <TouchableOpacity onPress={() => navigation.navigate('EditBlogScreen',{itemId:itemId})}>
            <EditIcon  name="edit" size={35} color="white" paddingHorizontal= '30'/>
            </TouchableOpacity>
        ),
    });
},[navigation]);
 
  

  //If You are using the latest version of react navigation(i.e. Version 5.0 or more). You can simply use this.props.route.params.YOUR_PARAMETER_KEY for passing parameters
  const blogPost = state.find((blogPost) => blogPost.id === itemId);
    
  return (
        <View style={{flex: 1}}>
        <Text style={styles.row}>Blog Details Screen </Text>
        <Text style={styles.row}>Title -- {blogPost.title}</Text>
        <Text style={styles.row}>Content -- {blogPost.content}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  row:{
    paddingVertical:20,
    paddingHorizontal:10,
    fontSize:18
}

});

export default ShowScreen;