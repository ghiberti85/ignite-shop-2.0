import { ReactNode, createContext, useState } from "react"


interface Item {
    name: string
    imageUrl: string
    priceId: string
    unitAmount: number
}

interface CartContextData {
    items: Item[]
    addItem: (item: Item) => void
    removeItem: (priceId: string) => void
    clear: () => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
    children: ReactNode | ReactNode[]
}


export function CartContextProvider({ children }: CartContextProviderProps) {
    const [items, setItems] = useState([] as Item[])
    
    function addItem() {

    }

    function removeItem() {

    }

    function clear() {

    }

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                clear,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}