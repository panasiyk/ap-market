// @ts-ignore
import { createAction } from "redux-actions";
import {ADD_NEW_PACKAGE_OF_PRODUCTS, productData} from "./types";
import { AppThunk } from "../index";
import Http from "../../service/Api";

export const getProducts = (): AppThunk => async dispatch => {
    const items: productData[] = await Http.get();
    dispatch(createAction(ADD_NEW_PACKAGE_OF_PRODUCTS)(items))
}

