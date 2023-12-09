import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, SafeAreaView } from "react-native";
import CustomListItem from "../Components/CustomListItem";
// import { AntDesign, SimpleLineIcons } from "react-native-vector-icons";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { auth, onAuthStateChanged } from "../firebase";
import { Avatar, ListItem } from "@rneui/base";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  useLayoutEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        console.log("User logged in");
        setUser(user.photoURL);
      } else {
        navigation.replace("Login");
      }
    });

    return unSubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View
          style={{
            marginLeft: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Avatar
              source={{
                uri: user?.photoURL,
              }}
              rounded
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
