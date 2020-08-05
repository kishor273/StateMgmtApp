import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext' 
import BlogPostForm from '../componenets/BlogPostForm';

const EditBlogScreen = ({route, navigation}) => {

  const{ state,editBlogPost } = useContext(Context);
  const {itemId}  = route.params;

//If You are using the latest version of react navigation(i.e. Version 5.0 or more). You can simply use this.props.route.params.YOUR_PARAMETER_KEY for passing parameters
const blogPost = state.find(
  blogPost => blogPost.id === itemId);

  return (
    <BlogPostForm 
    intialValues={{title:blogPost.title,content:blogPost.content}}
    
    onSubmit={(title,content) => {
      editBlogPost(itemId,title,content,() => navigation.pop());
    }}/>
)
}

const styles = StyleSheet.create({});

export default EditBlogScreen;