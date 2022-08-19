import { Api } from "../services/api";
import { IProduct, TProductList } from "./types";

export function getProducts() {
    const request = Api
        .get<TProductList[]>('')
        .then((result) => {
            return result.data.products;
        });

    return request;
}