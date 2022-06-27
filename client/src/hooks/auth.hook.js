import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [userName, setUserName] = useState(null)
    const [ready, setReady] = useState(false)

    const login = useCallback((jwtToken, id, email, name) => {
        setToken(jwtToken)
        setUserId(id)
        setUserEmail(email)
        setUserName(name)

        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            userId: id,
            userEmail: email,
            userName: name
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setUserEmail(null)
        setUserName(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.userEmail, data.userName)
        }
        setReady(true)
    }, [login])


    return { login, logout, token, userId, userEmail, userName, ready }
}