import {GetterTree, MutationTree, Module} from 'vuex'
import { RootState } from '@/store'

export interface CartItem {
    id: number
    count: number
}

export interface CartStateStorable {
    cart: CartItem[],
}


const state: CartStateStorable = {
    cart: []
}

export interface setCountCartItemByIdPayload {
    id: number
    count: number
}

const mutations: MutationTree<CartStateStorable> = {
    addItemToCart: (state, itemIndex: number) => {
        const existCartItem = state.cart.find(item => item.id === itemIndex)

        if (existCartItem !== undefined) {
            existCartItem.count++
            return
        }

        state.cart.push({
            id: itemIndex,
            count: 1
        })
    },
    removeCartItemById: (state, id: number) => {
        const cartItemIndex = state.cart.findIndex(item => item.id === id)

        if (cartItemIndex !== -1) {
            state.cart.splice(cartItemIndex, 1)
        }
    },
    setCountCartItemById: (state, payload: setCountCartItemByIdPayload) => {
        const cartItem = state.cart.find(item => item.id === payload.id)

        if (cartItem !== undefined) {
            cartItem.count = payload.count
        }
    }
}

const getters: GetterTree<CartStateStorable, RootState> = {
    getCart: state => state.cart
}


const CartModule: Module<CartStateStorable, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
}

export default CartModule