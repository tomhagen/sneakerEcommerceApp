import React from 'react'
import { StyleSheet, Text, View , SafeAreaView} from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.font}>Đây là text font nè</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    font: {
        fontSize:30,
        fontFamily: 'Roboto-Thin'
    }
})
