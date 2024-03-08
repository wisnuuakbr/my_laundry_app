import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { primaryColor } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo </Text>
                    <Text style={styles.valueSaldo}>Rp. 1.250.000</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelPoint}>Point </Text>
                    <Text style={styles.valuePoint}>100 point</Text>
                </View>
            </View>
            <View style={styles.button}>
                <ButtonIcon title="Add Saldo" />
                <Gap width={10} />
                <ButtonIcon title="Get Point" />
            </View>
        </View>
    )
}

export default Saldo

// set responsiveness screen size
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginTop: windowHeight * -0.05,
        marginHorizontal: 28,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 5,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info: {
        width: '60%',
    },
    labelSaldo: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Regular'
    },
    valueSaldo: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    },
    labelPoint: {
        fontSize: 15,
        fontFamily: 'TitilliumWeb-Regular'
    },
    valuePoint: {
        fontSize: 15,
        fontFamily: 'TitilliumWeb-Bold',
        color: primaryColor
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})