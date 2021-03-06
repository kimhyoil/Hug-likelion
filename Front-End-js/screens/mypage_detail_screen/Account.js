import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class Account extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View>
          <View style={styles.profileContainer}>
            <Text>프로필</Text>
            <TouchableOpacity
              style={styles.detailComponent}
              onPress={() => {
                navigation.navigate("NickName");
              }}
            >
              <View>
                <Text>닉네임</Text>
                <Text style={styles.textContainer}>Cyrano</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={27}
                style={styles.iconContainer}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.detailComponent}
              onPress={() => {
                navigation.navigate("Birth");
              }}
            >
              <View>
                <Text>생년월일</Text>
                <Text style={styles.textContainer}>1996.12.25</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={27}
                style={styles.iconContainer}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.detailComponent}
              onPress={() => {
                navigation.navigate("Sex");
              }}
            >
              <View>
                <Text>성별</Text>
                <Text style={styles.textContainer}>남성</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={27}
                style={styles.iconContainer}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contactContainer}>
            <Text>연락처 정보</Text>
            <TouchableOpacity
              style={styles.detailComponent}
              onPress={() => {
                navigation.navigate("Email");
              }}
            >
              <View>
                <Text>이메일</Text>
                <Text style={styles.textContainer}>
                  hyulikelion@likelion.org
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={27}
                style={styles.iconContainer}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.detailComponent}
              onPress={() => {
                navigation.navigate("PhoneNumber");
              }}
            >
              <View>
                <Text>휴대전화</Text>
                <Text style={styles.textContainer}>010-XXXX-XXXX</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={27}
                style={styles.iconContainer}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.icon_container}>
        <Ionicons name="ios-arrow-back" size={23} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>계정 관리</Text>
      </View>
      <View style={styles.header_right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 90
  },
  header_right: {
    flex: 1,
    marginRight: 15
  },
  headerContainer: {
    flexDirection: "row",
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
  icon_container: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 15
  },
  profileContainer: {
    backgroundColor: "#F0F8FF",
    margin: 10,
    marginTop: 30,
    padding: 20,
    height: height / 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray"
  },
  contactContainer: {
    backgroundColor: "#F0F8FF",
    margin: 10,
    padding: 20,
    height: height / 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray"
  },
  detailComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  iconContainer: {
    color: "gray",
    padding: 3
  },
  textContainer: {
    marginTop: 10,
    fontSize: 17
  }
});
