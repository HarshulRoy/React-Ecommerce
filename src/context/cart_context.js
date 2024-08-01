import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();
const initialState = {
    cart: JSON.parse(localStorage.getItem("addCart")) || [],
    total_item:"",
    total_price:"",
    shipping_fee: 500, 
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({type:"ADD_TO_CART", payload: {id, color, amount, product, state}})
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }
    const clearCart = () => {
        dispatch({type: "CLEAR_CART",payload: state.cart})
    }

    const setDecrease = (id) => {
        dispatch({type: "DECREMENT", payload: {id, ...state}})
    }
    const setIncrement = (id) => {
        dispatch({type: "INCREMENT", payload: {id, ...state}})
    }


    useEffect(()=>{
        dispatch({type: "TOTAL_ITEM"})
        dispatch({type: "TOTAL_PRICE"})
    },[state.cart])

    return(
        <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrement}}>{children}</CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider, useCartContext}

