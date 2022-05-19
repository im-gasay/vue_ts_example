export interface Product {
    B: boolean
    C: number
    CV: any
    G: number
    P: number
    Pl: any
    T: number
}

export interface ProductResponse {
    Error: string
    Id: number
    Success: boolean
    Value: {
        Goods: Product[]
    }
}