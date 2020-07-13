import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function WriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.writeContainer}>
        <View style={styles.todayColor}>
          <Text>오늘 나의 색은?</Text>
          <View style={styles.colorBox}></View>
        </View>
        <View style={styles.EmotionTable}></View>
        <View style={styles.detailEmotionTable}></View>
        <View style={styles.writePart}>
          <TextInput
            style={styles.diaryTitleContainer}
            placeholder="제목을 입력하세요"
            placeholderTextColor="gray"
            returnKeyType="done"
          />
          <TextInput
            style={styles.diaryContentsContainer}
            placeholder="오늘의 심리를 기록해보세요"
            placeholderTextColor="gray"
            multiline={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 일기</Text>
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
  },
  writeContainer: {
    margin: 15,
    padding: 20,
    height: height,
    backgroundColor: "#F0F8FF"
  },
  todayColor: {
    backgroundColor: "#FAEBD7",
    margin: 5,
    padding: 5
  },
  colorBox: {
    padding: 5,
    backgroundColor: "skyblue"
  },
  EmotionTable: {
    backgroundColor: "#FAEBD7",
    padding: 5,
    margin: 5
  },
  detailEmotionTable: {
    backgroundColor: "#8FBC8F",
    padding: 5,
    margin: 5
  },
  writePart: {
    backgroundColor: "#8FBC8F",
    margin: 5,
    padding: 5,
    height: height / 2
  },
  diaryTitleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20,
    marginRight: 20
  },
  diaryContentsContainer: {
    padding: 20,
    paddingTop: 20
  }
});