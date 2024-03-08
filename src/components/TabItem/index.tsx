import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Home, HomeActive, Account, AccountActive, Order, OrderActive } from '../../assets'
import { primaryColor, secondaryColor } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {

    const Icon = () => {
        // ternary condition is Active
        if (label === "Home") return isFocused ? <HomeActive /> : <Home />
        if (label === "Order") return isFocused ? <OrderActive /> : <Order />
        if (label === "Account") return isFocused ? <AccountActive /> : <Account />
        // else
        return <Home />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? primaryColor : secondaryColor,
        marginTop: 4
    })
})