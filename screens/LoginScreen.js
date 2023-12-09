import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Image, Input } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../firebase";

const LoginScreen = ({ navigation }) => {
  //   const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       const uid = user.uid;
  //       navigation.replace("Home");
  //     } else {
  //     }
  //   });

  //   return unSubscribe;
  // }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/2048px-Signal-Logo.svg.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        title="Register"
        type="outline"
        onPress={() => navigation.navigate("Register")}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
});
