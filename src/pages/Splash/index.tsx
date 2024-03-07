import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Background, Logo } from '../../assets';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('TabNav')
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground source={Background} style={styles.backgroundStyle} >
            <Image source={Logo} style={styles.logoStyle} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        width: 222,
        height: 105
    }
})