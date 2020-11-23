// @ts-ignore
import { createAction } from "redux-actions";
import { productData } from "../products/types";
import {ADD_PRODUCT_TO_BASKED, BuskedItem, INIT_PRODUCTS_IN_BASKED, REMOVE_PRODUCT_TO_BASKED} from "./types";

export const initProduct = (item: BuskedItem[]) => createAction(INIT_PRODUCTS_IN_BASKED)(item)
export const addProduct = (item: productData) => createAction(ADD_PRODUCT_TO_BASKED)(item)
export const removeProduct = (item: productData) => createAction(REMOVE_PRODUCT_TO_BASKED)(item)

