import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Input } from "@rneui/themed";
import { Button, Text } from "@rneui/base";
import { auth, createUserWithEmailAndPassword } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to login",
    });
  }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.update({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
        });
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text
        h3
        style={{
          marginBottom: 50,
        }}
      >
        Create a signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
