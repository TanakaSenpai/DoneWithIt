import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
function MessagesScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "one",
      description: "desc 1",
      image: require("../assets/face.jpg"),
    },
    {
      id: 2,
      title: "Two",
      description: "desc 2",
      image: require("../assets/face.jpg"),
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [isRefreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <FlatList
      style={styles.container}
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          title={item.title}
          subTitle={item.description}
          onPress={() => {}}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={<ListItemSeparator />}
      refreshing={isRefreshing}
      onRefresh={() => {
        setMessages([...messages, {
          id: 3,
          title: "Three",
          description: "desc 3",
          image: require("../assets/face.jpg"),
        }]);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default MessagesScreen;
