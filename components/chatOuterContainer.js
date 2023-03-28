import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {
    Ionicons,
  } from "@expo/vector-icons";
const ChatBox = (props) => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.leftWrapper}>
    <View style={styles.iconWrapper}>{props.src? <Image 
        source={props.src} style={styles.imgPic}/> : <Ionicons name="ios-people" size={30} color="#FFFFFF" />}</View>
    <View style={styles.textWrapper}>
    <Text style={styles.name}>{ props.name =='' ? 'Abhi' :  props.name}</Text>
    <Text style={styles.msgDesc}>{ props.msg =='' ? 'Abhinav ka msg hai' :  props.msg}</Text>
    </View>
    </View>
    <Text style={styles.timeText}>{props.time?props.time: '12:00 am'}</Text>
    </View>
  )
}

export default ChatBox

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12,
        paddingLeft:15,
        paddingRight:15,
        alignItems:'center',
    },
iconWrapper:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#EEE9DA',
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,
},
textWrapper:{
},
name:{
    fontSize:21,
    fontWeight:'bold',
},
msgDesc:{
    fontSize:16,
},
timeText:{
    fontSize:15,
},
leftWrapper:{
    flexDirection:'row',
    alignItems:'center',
    // flex:4,
    
},
imgPic:{
    width:'87%',
    height:'87%',
    borderRadius:25,
},
})