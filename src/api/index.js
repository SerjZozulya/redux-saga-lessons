export const getUsers = async () => {
    const request = await fetch('https://dummyjson.com/users')
    return await request.json()
}