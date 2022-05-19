import {GetterTree, ActionTree, MutationTree, Module} from 'vuex'
import { RootState } from '@/store'
import { Product } from "@/api/responses/ProductsResponse";
import { services } from "@/plugins/services";
import NamesResponse, {CategoryItem} from "@/api/responses/NamesResponse";
import ProductEntity from '@/entites/Product'

export interface ProductStateStorable {
    products: Product[],
    names: NamesResponse

}

export interface ProductsInCategory {
    id: number
    title: string
    products: ProductEntity[]
}

const actions: ActionTree<ProductStateStorable, RootState> = {
    async loadProducts({ commit }) {
        const response = await services.product.getProducts()
        commit('setProducts', response.data.Value.Goods)
        return response
    },
    async loadNames({ commit }) {
        const response =  await services.product.getNames()
        commit('setNames', response.data)
        return response
    }
}

const state: ProductStateStorable = {
    products: [],
    names: {}
}

const mutations: MutationTree<ProductStateStorable> = {
    setProducts: (state, products: Product[]) => state.products = products,
    setNames: (state, names: NamesResponse) => state.names = names,
}

const getters: GetterTree<ProductStateStorable, RootState> = {
    getProducts: state => state.products,
    getNames: state => state.names,
    getProductsWithNames: state => {
        const products: ProductsInCategory[] = []

        for (const [categoryId, categoryItem] of Object.entries(state.names) as ([string, CategoryItem][])) {
            const productsInGroup: ProductEntity[]  = []

            for (const [productId, productItem] of Object.entries(categoryItem.B)) {
                const product = state.products.find(item => item.T === parseInt(productId))

                if (product === undefined) {
                    continue
                }

                productsInGroup.push({
                    id: parseInt(productId),
                    categoryId: parseInt(categoryId),
                    title: productItem.N,
                    price: product.C,
                    count: product.P
                })
            }

            products.push({
                id: parseInt(categoryId),
                title: categoryItem.G,
                products: productsInGroup
            })

        }

        return products
    }
}


const ProductModule: Module<ProductStateStorable, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default ProductModule