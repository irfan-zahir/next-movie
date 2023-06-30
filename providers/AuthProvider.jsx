import React from "react";

const AuthContext = React.createContext({
    authUser: null,
    loading: true,
    logout: null,
    login: null
})

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthProvider = ({ initialValue, children }) => {
    const [authUser, setAuthUser] = React.useState(initialValue.authUser)
    const [loading, setLoading] = React.useState(initialValue.loading)

    const logout = () => setAuthUser(null)
    const login = (user) => setAuthUser(user)

    return (
        <AuthContext.Provider value={{ authUser, loading, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}