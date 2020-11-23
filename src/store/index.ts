import {Action, applyMiddleware, combineReducers, createStore, Reducer} from 'redux';
import {ProductState} from "./products/types";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from "redux-thunk";
import { productsReducer } from './products';
import { buskedReducer } from './basket';
import {FormStateMap, reducer as formReducer } from 'redux-form'
import {BuskedState} from "./basket/types";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    ApplicationState,
    unknown,
    Action<string>>

export interface ApplicationState {
    products: ProductState;
    busked: BuskedState;
    form: FormStateMap;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    products: productsReducer,
    busked: buskedReducer,
    form: formReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
