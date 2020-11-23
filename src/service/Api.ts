import axios from 'axios';
import {PRODUCTS_COUNT_FOR_API} from "../constants";
import { productData } from '../store/products/types';

const url = (limit: number) => `https://fakestoreapi.com/products?limit=${limit}`;

export default class Http {
    static async get(limit: number = PRODUCTS_COUNT_FOR_API): Promise<productData[]> {
        try {
            return (await axios.get<productData[]>(url(limit))).data;
        } catch ({status, message, code, ...other}) {
            throw {status, message, code};
        }
    }
}
