import React from 'react';
import { Box, Text, Button, ScrollView, View, Stack, Input, Image, Center, VStack, HStack, Link, AddIcon, Modal, FormControl} from 'native-base';
import axios from "axios";

const MainProfessor = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState({});





  const addTutoria = async () => {

  }

  if (showModal){
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Edit Data</Modal.Header>
                <Modal.Body>
                    <FormControl.Label>Cupo Asesoria</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            nameU: value
                        })}></Input>
                    <FormControl.Label>Fecha</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            lastnameU: value
                        })}></Input>
                    <FormControl.Label>Hora</FormControl.Label>
                    <Input onChangeText={value => setFormData({
                            ...formData,
                            emailU: value
                        })}></Input>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setShowModal(false);
                        }}>Cancel</Button>
                        <Button onPress={() => {
                            updateDate();
                        }}>Save</Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}
  return (
    <ScrollView safeAreaTop>
      <View flex={1} px="150">
      <Box Box p="3" rounded="xl">
                        <Button
                            size="lg"
                            backgroundColor="#1b396a"
                            borderRadius={30}
                            onPress={() => setShowModal(true)}><AddIcon/></Button>
      </Box>
      </View>
    </ScrollView>
  );
};

export default MainProfessor;