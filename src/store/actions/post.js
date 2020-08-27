import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types";
import * as FileSystem from 'expo-file-system';
import { DB } from "../../db";

export const loadPosts = () => {
    return async dispatch => {
        const response = await DB.getPosts()
        dispatch({
            type: LOAD_POSTS,
            payload: response
        })
    }
}

export const toogleBooked = (id) => ({
    type: TOGGLE_BOOKED,
    payload: id
})

export const removePost = (id) => ({
    type: REMOVE_POST,
    payload: id
})

export const addPost = (post) => {
    return async dispatch => {
        const fileName = post.img.split('/').pop()
        const newPath = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                to: newPath,
                from: post.img
            })
        } catch (error) {
            console.log(error)
        }

        const payload = {...post, img: newPath}
        const id = await DB.createPost(payload)
        payload.id = id
        
        dispatch({
            type: ADD_POST,
            payload
        })
    }
}