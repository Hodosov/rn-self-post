import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import {toogleBooked, removePost} from '../store/actions/post'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const postId = navigation.getParam('postId')

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

    useEffect(() => {
        navigation.setParams({ booked})
    }, [booked])

    const toogleHandler = useCallback(() => {
        dispatch(toogleBooked(post))
    }, [dispatch, post])

    useEffect(() => {
        navigation.setParams({toogleHandler})
    }, [])

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                { text: 'Удалить', onPress: () => {
                    dispatch(removePost(postId))
                    navigation.navigate('Main')
                }, styles: 'destructive' }
            ],
            { cancelable: false }
        );
    }

    if(!post) {
        return null
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const toogleHandler = navigation.getParam('toogleHandler')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return {
        headerTitle: new Date(date).toLocaleDateString(),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title='Take photo'
                    iconName={iconName}
                    onPress={() => toogleHandler()} />
            </HeaderButtons>),
    }

}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular',
        fontSize: 18
    }
})