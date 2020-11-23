import { productData } from "../products/types"

export const INIT_PRODUCTS_IN_BASKED = 'INIT_PRODUCTS_IN_BASKED'
export const ADD_PRODUCT_TO_BASKED = 'ADD_PRODUCT_TO_BASKED'
export const REMOVE_PRODUCT_TO_BASKED = 'REMOVE_PRODUCT_TO_BASKED'

export type BuskedState  = {
    items: BuskedItem[]
}

export type BuskedItem  = {
    id: number;
    item: productData
    count:number
}

export interface AddProductsAction{
    type: typeof ADD_PRODUCT_TO_BASKED
    payload: productData
}

export interface RemoveProductsAction{
    type: typeof REMOVE_PRODUCT_TO_BASKED
    payload: productData
}

export interface InitProductsAction{
    type: typeof INIT_PRODUCTS_IN_BASKED
    payload: BuskedItem[]
}

