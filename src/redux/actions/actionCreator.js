import { DECREASE_COUNT, GET_USERS, INCREASE_COUNT } from "../constants"

export const increaseCount = () => ({
    type: INCREASE_COUNT
})

export const decreaseCount = () => ({
    type: DECREASE_COUNT
})

export const getUsers = () => ({
    type: GET_USERS
})