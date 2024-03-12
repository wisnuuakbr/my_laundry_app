import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonIcon from '../ButtonIcon'

const Service = () => {
    return (
        <View style={styles.service}>
            <Text style={styles.text1}>Service</Text>
            <View style={styles.iconService}>
                <ButtonIcon title="Kilo" type="service" />
                <ButtonIcon title="Pieces" type="service" />
                <ButtonIcon title="Vip" type="service" />
                <ButtonIcon title="Carpet" type="service" />
                <ButtonIcon title="Iron" type="service" />
                <ButtonIcon title="Delivery" type="service" />
            </View>
        </View>
    )
}

export default Service

const styles = StyleSheet.create({
    service: {
        paddingLeft: 30,
        paddingTop: 17,
    },
    text1: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
    },
    iconService: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
    }
})