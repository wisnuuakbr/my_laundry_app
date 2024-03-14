import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonIcon from '../ButtonIcon'

const Service = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Service</Text>
            <View style={styles.iconStyle}>
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
    container: {
        paddingLeft: 30,
        paddingTop: 15,
    },
    text: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        flexWrap: 'wrap',
    }
})