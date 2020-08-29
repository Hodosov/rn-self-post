import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data = [], onOpen }) => {

    if(!data.length) {
        return <View style={styles.wrapper}><Text>Постов пока нет</Text></View>
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return <Post post={item} onOpen={onOpen} />
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        height: '100%'
    }
})