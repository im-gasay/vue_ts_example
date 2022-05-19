import Vue from 'vue'
import {ProductService} from "@/api/services/ProductService";

import axios from "@/plugins/axios";

export interface ServicesInterface {
    product: ProductService,
}

declare module 'vue/types/vue' {
    interface Vue {
        $services: ServicesInterface
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $services: ServicesInterface
    }
}

export const services: ServicesInterface = {
    product: new ProductService(axios)
}

Vue.prototype.$services = services
