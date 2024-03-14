import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AddSaldo, GetPoint, Kilo, Pieces, Vip, Carpet, Iron, Delivery } from '../../assets'
import { tealColor } from '../../utils/constant'

const ButtonIcon = ({ title, type, size = 60 }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <AddSaldo />
        if (title === "Get Point") return <GetPoint />
        if (title === "Kilo") return <Kilo width={size} height={size} />
        if (title === "Pieces") return <Pieces width={size} height={size} />
        if (title === "Vip") return <Vip width={size} height={size} />
        if (title === "Carpet") return <Carpet width={size} height={size} />
        if (title === "Iron") return <Iron width={size} height={size} />
        if (title === "Delivery") return <Delivery width={size} height={size} />
        return <AddSaldo />
    }
    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.icon(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: 12,
        marginRight: type === "service" ? 30 : 7,
    }),
    icon: (type) => ({
        backgroundColor: tealColor,
        padding: type === "service" ? 20 : 7,
        borderRadius: 10,
    }),
    text: (type) => ({
        fontSize: type === "service" ? 14 : 10,
        fontFamily: type === "service" ? 'TitilliumLight' : 'TitilliumWeb-Regular',
        textAlign: 'center',
    }),
})