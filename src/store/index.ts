import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({

})

export type RootState = ReturnType<typeof state>


import Cart from './modules/Cart'
import Products from "@/store/modules/Products";
import Currency from "@/store/modules/Currency";

export default new Vuex.Store({
    state,
    modules: {
        Cart,
        Products,
        Currency
    }
})
