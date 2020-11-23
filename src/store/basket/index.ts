// @ts-ignore
import {handleActions} from "redux-actions";
import {
    AddProductsAction, ADD_PRODUCT_TO_BASKED, BuskedItem, BuskedState, InitProductsAction,
    RemoveProductsAction,
    REMOVE_PRODUCT_TO_BASKED, INIT_PRODUCTS_IN_BASKED
} from "./types";
import {reduxFormNames} from "../../constants";
import LocalStorage from '../../service/LocalStorage';

const initialState: BuskedState = {
    items: []
}

export const buskedReducer = handleActions<BuskedState>({
        [INIT_PRODUCTS_IN_BASKED]: (state: BuskedState, action: InitProductsAction) => ({
            ...state,
            items: action.payload ? action.payload : []
        }),
        [ADD_PRODUCT_TO_BASKED]: (state: BuskedState, action: AddProductsAction) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            let newState:BuskedState = {items: []};
            if (index !== -1) {
                newState = {
                    ...state,
                    items: state.items.map((item: BuskedItem, i: number) => i === index ? {
                        ...item,
                        count: (item.count ? item.count : 0) + 1
                    } : item)
                }
            } else newState = {
                ...state, items: [...state.items, {
                    id: action.payload.id,
                    item: action.payload,
                    count: 1
                }]
            }
            LocalStorage<BuskedItem[]>().set(reduxFormNames.ORDER, newState.items)
            return newState

        },
        [REMOVE_PRODUCT_TO_BASKED]: (state: BuskedState, action: RemoveProductsAction) => {
            const temp = [...state.items]
            const index = state.items.findIndex(product => product.id === action.payload.id)
            if (temp[index].count !== 1)
                --temp[index].count
            else temp.splice(index, 1);
            LocalStorage<BuskedItem[]>().set(reduxFormNames.ORDER, temp)
            return {...state, items: temp};
        },
    }, initialState
);

