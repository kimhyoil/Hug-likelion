import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput
} from "react-native";

export default function Nowadays_emotion() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>최근 나의 온도</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 90
  },
  headerContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  }
});
