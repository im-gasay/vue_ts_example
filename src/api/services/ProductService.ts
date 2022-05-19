import {BaseService} from "@/api/services/BaseService";
import {AxiosResponse, AxiosStatic} from "axios";
import {ProductResponse} from "@/api/responses/ProductsResponse";
import NamesResponse from "@/api/responses/NamesResponse";


export class ProductService extends BaseService {
    constructor($http: AxiosStatic) {
        super($http);
    }

    async getProducts(): Promise<AxiosResponse<ProductResponse>> {
        return await this.$http.get<ProductResponse>('/data.json')
    }

    async getNames(): Promise<AxiosResponse<NamesResponse>> {
        return await this.$http.get<NamesResponse>('/names.json')
    }
}
