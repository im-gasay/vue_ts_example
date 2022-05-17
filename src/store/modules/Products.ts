import {GetterTree, ActionTree, MutationTree, Module} from 'vuex'
import { RootState } from '@/store'

import Product from "@/entites/Product";

export interface ProductStateStorable {
    products: Product[]
}

const state: ProductStateStorable = {
    products: []
}

const getters: GetterTree<ProductStateStorable, RootState> = {
    getProducts: state => state.products
}

const mutations: MutationTree<ProductStateStorable> = {

}

const actions: ActionTree<ProductStateStorable, RootState> = {

}

const ProductModule: Module<ProductStateStorable, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default ProductModule