import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Article from '../components/Article'
import axios from 'axios';
const TechScreen = () => {
    const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=8b4336440044453aa726b8e9fd94501a"
    const[articles, setArticles]=useState([])

    const getNews=()=>{
        axios.get(url, {
          params:{
            category:"technology"
          }
        })
  .then( (response)=> {
    // handle success
    console.log(response.data.articles);
    setArticles(response.data.articles);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }

    useEffect(()=>{
        getNews();
    },[]);


  return (
    <View>
        <FlatList
        data={articles}
        renderItem={({item})=> 
        <Article
        urlToImage = {item.urlToImage}
        title= {item.title}
        description= {item.description}
        author={item.author}
        publishedAt={item.publishedAt}
        />}
        keyExtractor={(item)=>item.title}
        />

    </View>
  );
};

export default TechScreen;

const styles = StyleSheet.create({
    container:{

    },
    image:{
        height:"100%",
        width:"100%"
    }
})