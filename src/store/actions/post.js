import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST } from "../types";
import { DATA } from "../../data";

export const loadPosts = () => ({
    type: LOAD_POSTS,
    payload: DATA
})

export const toogleBooked = (id) => ({
    type: TOGGLE_BOOKED,
    payload: id
})

export const removePost = (id) => ({
    type: REMOVE_POST,
    payload: id
})