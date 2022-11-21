import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const ItemTutoria = (props) => {
    let status = "default"
    if(props.statusAsesoria == 1){
        status = "open"
    }else if (props.statusAsesoria == 0){
         status = "close"
    }
return(
    <View style={styles.cardView}>
        <Text>
            Materia: {props.nombreMateria}
        </Text>
        <Text>
            Status: {status}
        </Text>
        <Text>
            fecha: {props.fecha}
        </Text>
        <Text>
            Hora: {props.hora}
        </Text>
        <Text>
            Cupo: {props.cupo}
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical: 5,
        padding: 35,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

export default ItemTutoria;