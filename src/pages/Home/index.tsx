import { ImageBackground, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { Header } from '../../assets'
import { Logo } from '../../assets'
import Saldo from '../../components/Saldo'
import Service from '../../components/Service'
import ActiveOrder from '../../components/ActiveOrder'
import { greyColor } from '../../utils/constant'

const Home = () => {

    const [time, setTime] = useState('');

    useEffect(() => {
        // get local time
        const currentDate = new Date()
        const currentHour = currentDate.getHours()

        // set message
        if (currentHour >= 5 && currentHour < 12) {
            setTime('Good Morning!');
        } else if (currentHour >= 12 && currentHour < 18) {
            setTime('Good Afternoon!');
        } else {
            setTime('Good Evening!');
        }
    }, [])

    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={Header} style={styles.logoHeader}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.message}>
                        <Text style={styles.messageTime}>{time}</Text>
                        <Text style={styles.userName}>Wisnu Akbara</Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <Service />
                <View style={styles.container}>
                    <Text style={styles.text1}>Active Order</Text>
                    <ActiveOrder title="Pesanan No. 002142" status="Done" />
                    <ActiveOrder title="Pesanan No. 002143" status="Still On Progress" />
                    <ActiveOrder title="Pesanan No. 002144" status="Done" />
                    <ActiveOrder title="Pesanan No. 002145" status="Still On Progress" />
                    <ActiveOrder title="Pesanan No. 002146" status="Still On Progress" />
                    <ActiveOrder title="Pesanan No. 002147" status="Still On Progress" />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home
// set dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    // Home page style
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoHeader: {
        width: windowWidth,
        height: windowHeight * 0.28,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        width: windowWidth * 0.3,
        height: windowHeight * 0.06
    },
    message: {
        marginTop: windowHeight * 0.03,
    },
    messageTime: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Regular'
    },
    userName: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    },
    // Active order style
    container: {
        paddingTop: 10,
        paddingHorizontal: 30,
        backgroundColor: greyColor,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text1: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
    },
})