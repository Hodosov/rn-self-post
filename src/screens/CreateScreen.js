import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { useDispatch } from 'react-redux'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'

export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [photo, setPhoto] = useState(null)

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: photo,
            booked: false

        }
        dispatch(addPost(post))
        navigation.navigate('Main')
        setText('')
        setPhoto(null)
    }

    const photoPickHandler = (uri) => {
        setPhoto(uri)
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создать новый пост</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder='Что у вас нового?'
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} photo={photo} />
                    <Button title='Создать' color={THEME.MAIN_COLOR} onPress={saveHandler} disabled={!text} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
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
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})