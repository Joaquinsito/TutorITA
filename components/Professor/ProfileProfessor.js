import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  HStack,
  Avatar,
  Heading,
  VStack,
  useToast,
  Center,
  Divider,
  Box,
  Flex,
  Link,
  Modal,
  Button,
  FormControl,
  Input,
} from "native-base";


const ProfileProfessor = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalIsOpen1, setModalIsOpen1] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const toast = useToast();
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }



  return (
    <View
      style={{
        justifyContent: "center",
        display: "flex",
        margin: 10,
      }}
    >
      <Center paddingBottom="2">
        <VStack space={2} alignItems="center">
          <Avatar bg="amber.500" source={{
            uri: "https://pbs.twimg.com/media/EGPJ-LDXYAAik46?format=jpg&name=medium"
          }} size="2xl">
            NB
            <Avatar.Badge bg="green.500" />
          </Avatar>
        </VStack>
      </Center>
    </View>
  );
};

export default ProfileProfessor;