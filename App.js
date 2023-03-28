import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Head from "./components/head";
import ChatPage from "./components/chatPage";
export default function App() {
  

  return (
    <View style={styles.container}>
      <Head />
      <ChatPage />
      <StatusBar style="auto" backgroundColor="#075e54" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
