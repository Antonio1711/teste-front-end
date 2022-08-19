export interface IProduct {
    productName?: string;
    photo?: string;
    price?: number;
    descriptionShort?: string;
}

export type TProductList = IProduct[]
