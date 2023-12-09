import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/base";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title
          style={{
            fontWeight: "800",
          }}
        >
          Youtube chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is t
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
