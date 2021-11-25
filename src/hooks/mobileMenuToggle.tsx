import React, { createContext, useState, useContext } from 'react'

interface IMobileMenuContext {
    isOpen: boolean
    openMenu(): void
    closeMenu(): void
}

const MobileMenuContext = createContext<IMobileMenuContext>({} as IMobileMenuContext)

const MobileMenuProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return(
        <MobileMenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

function useMobileMenu(): IMobileMenuContext  {
    const context = useContext(MobileMenuContext)
    return context
}

export { MobileMenuProvider, useMobileMenu }