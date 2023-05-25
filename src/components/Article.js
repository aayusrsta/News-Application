import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";
import { Linking } from 'react-native';

const Article = (props) => {
    const goToSource=()=>{      
        abc= props.url;
Linking.openURL(abc);
        console.log("Loggedin");
                                    

    };
  return ( 
     
     <View style={styles.container}>
        <TouchableOpacity style={styles.content} onPress={goToSource} >
        <Image source={{uri: props.urlToImage}} style={styles.image}/>
         <Text style={styles.headline}>{props.title}</Text>
         <Text style={styles.details} numberOfLines={3}>{props.description}</Text>
         <View style={styles.descriptions}>
          <Text style={styles.authors}>by- <Text style={styles.authorData}>{props.author}</Text></Text>
          <Text style={styles.date}> {props.publishedAt}</Text>
          <Text>{props.source}</Text>
         </View>
       </TouchableOpacity>    
    </View>
        )
    }
   
export default Article;

const styles = StyleSheet.create({

    container:{
        width:'90%',
    alignSelf:'center',
    borderTopLeftRadius:40,
    borderTopRightRadius:40, 
    shadowOpacity:5,
    shadowColor:'grey',

    },
    content:{
        marginTop:10,
        borderTopLeftRadius:40,
        borderTopRightRadius:40, 
        shadowOpacity:5,
        shadowColor:'grey',

    
    },
    details:{
        fontSize:15,

    },

    image:{
        marginTop:25,  

        height:200,
        width:"100%"
    },
    descriptions:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    headline:{
        marginTop:10,
        justifyContent:'center',
        fontSize:18,
        fontWeight:"bold",
    },
    authors:{
        paddingTop:10,
        fontSize:13,

    },
    authorData:{
        fontSize:15,
        fontWeight:'bold'
    },
    date:{
        paddingTop:10,
        fontSize:15,
        fontWeight:'bold',
        color:'red'
    }

})