import { $host } from "."
import { FRIENDS_ROUTE, MAX_FOLLOWING_ROUTE, NOT_FOLLOWING_ROUTE, PERSONS_ROUTE } from "../utils/consts"

export const fetchPersons = async () => {
    const {data} = await $host.get(PERSONS_ROUTE)
    return data
}

export const fetchOnePerson = async (id) => {
    const {data} = await $host.get(PERSONS_ROUTE + "/" + id)
    return data
}

export const fetchFriends = async (id) => {
    const {data} = await $host.get(PERSONS_ROUTE + "/" + id + FRIENDS_ROUTE)
    return data
}

export const fetchMaxFollowing = async () => {
    const {data} = await $host.get(MAX_FOLLOWING_ROUTE)
    return data
}

export const fetchNotFollowing = async () => {
    const {data} = await $host.get(NOT_FOLLOWING_ROUTE)
    return data
}