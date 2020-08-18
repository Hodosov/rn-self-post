import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {THEME} from '../theme'

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.navigate('Post', )
    } 

    return(
        <View style={styles.center}>
            <Text>Main Screen</Text>
            <Button title='Go to post' onPress={goToPost}/>
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Мой блог',
    headerStyle: {
            backgroundColor: THEME.MAIN_COLOR
        }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})