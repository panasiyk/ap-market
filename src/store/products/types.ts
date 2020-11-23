export const ADD_NEW_PACKAGE_OF_PRODUCTS = 'ADD_NEW_PACKAGE_OF_PRODUCTS'

export type productData  = {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

export type ProductState = {
    items: productData[]
}


export interface LoadProductsAction{
    type: typeof ADD_NEW_PACKAGE_OF_PRODUCTS
    payload: productData[]
}


export type ProductsActionTypes = LoadProductsAction
