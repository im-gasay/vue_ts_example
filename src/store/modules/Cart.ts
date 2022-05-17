import {GetterTree, ActionTree, MutationTree, Module} from 'vuex'
import { RootState } from '@/store'

const state = () => ({
    cart: []
})

type CartModuleState = ReturnType<typeof state>

const getters: GetterTree<CartModuleState, RootState> = {
    getCart: state => state.cart
}

const mutations: MutationTree<CartModuleState> = {

}

const actions: ActionTree<CartModuleState, RootState> = {

}

const CartModule: Module<CartModuleState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default CartModule