import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { THEME } from '../theme'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { Post } from '../components/Post'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return <Post post={item} onOpen={openPostHandler} />
                }} />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Мой блог',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Take photo'
                iconName='ios-camera'
                onPress={() => console.log('press photo')} />
        </HeaderButtons>),
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Toggle Drawer'
                iconName='ios-menu'
                onPress={() => console.log('press photo')} />
        </HeaderButtons>)
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})