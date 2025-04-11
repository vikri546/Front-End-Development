import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image resizeMode='contain' style={styles.Image} source={require('../assets/furniture2.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    Image: {
        Width: '100%',
        Height: '100%',
    }
})

export default ViewImageScreen