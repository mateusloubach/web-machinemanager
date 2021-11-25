import React, { createContext, useState, useContext } from 'react'

interface IAuthContext {
    logged: boolean
    signIn(email: string, password: string): void
    signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@mac-manager:logged')
        return !!isLogged
    })

    const signIn = (email: string, password: string) => {
        if (email === 'helen@facebook.com' && password === '123456') {
            localStorage.setItem('@mac-manager:logged', 'true')
            setLogged(true)
        } else {
            alert('access denied. Check the Input fields')
            setLogged(false)
        }
    }

    const signOut = () => {
        localStorage.removeItem('@mac-manager:logged')
        setLogged(false)
    }

    return(
        <AuthContext.Provider value={{ logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }