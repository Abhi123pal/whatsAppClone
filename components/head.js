import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";

const Head = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.iconsWrapper}>
          <MaterialCommunityIcons
            name="camera-outline"
            size={24}
            color="#fff"
          />
          <EvilIcons name="search" size={30} color="#fff" />
          <Entypo name="dots-three-vertical" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.navWrapper}>
        <TouchableOpacity>
          <Ionicons name="ios-people" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Calls</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#075e54",
    paddingTop: 45,
    height: "16%",
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 3,
  },
  iconsWrapper: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  navWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    paddingLeft:6,
    paddingRight:35,
  },
  text:{
    fontSize:17,
    fontWeight:'bold',
    color:'#FFFFFF'
  },
});
