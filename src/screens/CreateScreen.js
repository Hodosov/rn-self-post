import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateScreen = () => {

    const [text, setText] = useState('')

    return(
        <View style={styles.wrapper}>
            <Text style={styles.title}>Создать новый пост</Text>
            <TextInput
                style={styles.textarea}
                placeholder='Что у вас нового?'
                value={text}
                onChangeText={setText}
            />
        </View>
    )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Создание поста',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle Drawer'
                iconName='ios-menu'
                onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>)
})

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    }
})