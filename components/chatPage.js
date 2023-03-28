import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ChatBox from "./chatOuterContainer";
import { MaterialIcons } from "@expo/vector-icons";
const ChatPage = () => {
  var [data, setData] = useState([
    {
      id: 1,
      src: require("../assets/prof1.jpg"),
      name: "Raj",
      msg: "this is your Msg",
      time: "10:10 pm",
    },
    {
      id: 2,
      // src: require("../assets/image2.jpg"),
      name: "karan",
      msg: "this msg is not a default msg",
      time: "08:10 pm",
    },
    {
      id: 3,
      src: require("../assets/prof2.jpg"),
      name: "raju",
      msg: "this is your Msg",
      time: "11:10 pm",
    },
    {
      id: 4,
      src: require("../assets/prof1.jpg"),
      name: "sanjay",
      msg: "this is your Msg",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Abhinav",
      msg: "this is your Msg description",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Raj",
      msg: "this is your Msg read it",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Raju",
      msg: "this is your Msg",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Abhinav Pal",
      msg: "Send me the program...",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Abhinav",
      msg: "Call me when you are ready",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Raj kumar",
      msg: "Where are you?",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Raj karan",
      msg: "Good morning",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "abhi",
      msg: "this is your Msg raj",
      time: "10:10 pm",
    },
    {
      id: 5,
      src: require("../assets/prof1.jpg"),
      name: "Rajan",
      msg: "this is your Msg Abhinav",
      time: "10:10 pm",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                // onPress={() => completeTask(index)}
              >
                <ChatBox
                  key={index}
                  name={item.name}
                  msg={item.msg}
                  time={item.time}
                  src={item.src}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Your personal Messages are end to end encrypted
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.iconWrapper}>
          <MaterialIcons name="chat" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    position: "absolute",
    right: 10,
    bottom: 30,
  },
  footerText: {
    paddingTop: 15,
    textAlign: "center",
    fontSize: 12,
  },
});
