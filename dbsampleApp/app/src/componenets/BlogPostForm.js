import React,{useState} from 'react'
import {View, Text, StyleSheet, Button,TextInput} from 'react-native';

const BlogPostForm = ({ onSubmit,intialValues }) => {

    const [title,setTitle] = useState(intialValues.title);
    const [content,setContent] = useState(intialValues.content);

    return (
        <View style={{flex: 1}}>
        <Text style={styles.label}>Enter Title : </Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
    
        <Text style={styles.label}>Enter Content : </Text>
        <TextInput value={content} style={styles.input} onChangeText={(text) => setContent(text)}/>
      
        <Button title='Save Blog Post' style={styles.label}
        onPress={()=>{
            onSubmit(title,content)
        }}
        />
      
      </View>
    )
};

BlogPostForm.defaultProps ={
    intialValues:{
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({
    input:{
      fontSize:18,
      borderWidth:1,
      borderColor:'gray',
      marginBottom:15,
      padding:5,
      margin:5
    },
    label:{
      fontSize:22,
      marginBottom:10,
      marginTop:15,
      padding:5,
      margin:5
    }
    
    });

export default BlogPostForm;