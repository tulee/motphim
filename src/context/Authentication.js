import React, { useState } from 'react'

export const AuthenticationContext = React.createContext({
    authenticated: false,
    login: () => { }, 
    logout: () => {}
})

const AuthenticationContextProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false)

    const [myList, setMyList] = useState([])

    const loginHandler = () => {
        setAuthenticated(true)
    }

    const logoutHandler = () => {
        setAuthenticated(false)
    }

    return (
        <AuthenticationContext.Provider value={{
            authenticated: authenticated, login: loginHandler, 
            logout: logoutHandler,
            myList: myList,
            setMyList:setMyList
        }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContextProvider 