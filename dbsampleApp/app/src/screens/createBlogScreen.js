import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../componenets/BlogPostForm';
import IndexScreen from '../screens/IndexScreen';

const CreateBlogScreen = ({navigation}) => {

const{ addBlogPost } = useContext(Context);

return ( <BlogPostForm 
  onSubmit={(title,content) =>{
    addBlogPost(title,content,() =>navigation.navigate('IndexScreen'));
}}/> );

}

const styles = StyleSheet.create({});

export default CreateBlogScreen;