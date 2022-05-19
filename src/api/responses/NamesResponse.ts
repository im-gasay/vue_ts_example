export interface ProductItem {
    N: string,
    T: number
}

export interface CategoryItem {
    G: string
    B: {
        [key:number]: ProductItem
    }
}

export default interface NamesResponse {
    [key:number]: CategoryItem
}