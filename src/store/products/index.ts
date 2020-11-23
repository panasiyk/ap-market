// @ts-ignore
import {handleActions} from "redux-actions";
import {LoadProductsAction, ADD_NEW_PACKAGE_OF_PRODUCTS, ProductState} from "./types";

const initialState: ProductState = {
    items: []
}

export const productsReducer = handleActions<ProductState>({
        [ADD_NEW_PACKAGE_OF_PRODUCTS]: (state:ProductState, action:LoadProductsAction) => {
            return {
                items: [...state.items, ...action.payload]
            }
        },
    }, initialState
);
