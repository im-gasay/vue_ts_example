import {GetterTree, MutationTree, Module} from 'vuex'
import { RootState } from '@/store'

export interface CurrencyStateStorable {
    rub: number,
}


const state: CurrencyStateStorable = {
    rub: 30,
}

const mutations: MutationTree<CurrencyStateStorable> = {
    setRub: (state, value: number) => state.rub = value
}

const getters: GetterTree<CurrencyStateStorable, RootState> = {
    getRub: state => state.rub
}


const CurrencyModule: Module<CurrencyStateStorable, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
}

export default CurrencyModule