import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Statuspage = () => {
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
    </View>
  )
}

export default Statuspage

const styles = StyleSheet.create({})