import React, { useState } from 'react';
import { Text, View, ScrollView, HStack, Avatar, Heading, Box, Image, Center, VStack, Button } from 'native-base';

const Main = ({ route }) => {
    const Img1 = require('../../assets/carrers/1.jpg');
    const Img2 = require('../../assets/carrers/2.jpg');
    const Img3 = require('../../assets/carrers/3.jpg');
    const Img4 = require('../../assets/carrers/4.jpg');
    const Img5 = require('../../assets/carrers/5.jpg');
    const Img6 = require('../../assets/carrers/6.jpg');
    const Img7 = require('../../assets/carrers/7.jpg');
    const Img8 = require('../../assets/carrers/8.jpg');
    const Img9 = require('../../assets/carrers/9.jpg');
    return (
        <ScrollView w="100%">
            <View alignItems="center">
                <Heading mt="6">Carreers</Heading>
                <Box safeAreaTop alignItems="center">
                    <Image mt="2" shadow={2} source={Img1} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería en Tecnolgías de la Información y Comunicaciones</Text>
                    <Image mt="2" shadow={2} source={Img2} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Licenciatura en Admisnitración</Text>
                    <Image mt="9" shadow={2} source={Img3} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería Química</Text>
                    <Image mt="9" shadow={2} source={Img4} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería Mecánica</Text>
                    <Image mt="9" shadow={2} source={Img5} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería Eléctrica</Text>
                    <Image mt="9" shadow={2} source={Img6} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería Eléctrica</Text>
                    <Image mt="9" shadow={2} source={Img7} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería en Gestión Empresarial</Text>
                    <Image mt="9" shadow={2} source={Img8} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">Ingeniería Industrial</Text>
                    <Image mt="9" shadow={2} source={Img9} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={60} />
                    <Text fontWeight="bold">ngeniería en Materiales</Text>
                </Box>
            </View>
        </ScrollView>

    )
}

export default Main;