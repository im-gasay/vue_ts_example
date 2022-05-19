import {AxiosStatic} from "axios";

export abstract class BaseService {
    protected constructor(protected readonly $http: AxiosStatic) {
    }
}