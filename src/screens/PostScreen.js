import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const PostScreen = () => {
    return(
        <View style={styles.center}>
            <Text>Post Screen</Text>
        </View>
    )
}

PostScreen.navigationOptions = {
    headerTitle: 'Пост номер 40'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})