import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { Header } from '../../assets'
import { Logo } from '../../assets'
import Saldo from '../../components/Saldo'
import Service from '../../components/Service'

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
        <View>
            <ImageBackground source={Header} style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.view}>
                    <Text style={styles.title1}>{time}</Text>
                    <Text style={styles.title2}>Wisnu Akbara</Text>
                </View>
            </ImageBackground>
            <Saldo />
            <Service />
        </View>
    )
}

export default Home
// set responsiveness screen size
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.28,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        width: windowWidth * 0.3,
        height: windowHeight * 0.06
    },
    view: {
        marginTop: windowHeight * 0.03,
    },
    title1: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Regular'
    },
    title2: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    }
})