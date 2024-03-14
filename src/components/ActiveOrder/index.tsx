import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import React from 'react'
import { WashingMachine } from '../../assets'

const ActiveOrder = ({ title, status }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <WashingMachine />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ActiveOrder

// set dimensions
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
        marginVertical: windowWidth * 0.02,
        alignItems: 'center',
    },
    text: {
        marginLeft: windowWidth * 0.02
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold',
    },
    status: {
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
    }
})