import React, { useEffect, useState } from 'react';
import { IProduct, TProductList } from '../../context/types';
import { getProducts } from '../../context/util';
import { Card } from '../card';
import '../../styles/products.scss';


export function Products(props: IProduct) {
    const [productList, setProductList] = useState<TProductList[]>([]);
    const [product, setProduct] = useState<IProduct>();

    const getData = async () => {
        const response = await getProducts();
        const newData = await JSON.parse(JSON.stringify(response))

        setProductList(newData);
        setProduct(props)
    }

    useEffect(() => {
        getData();
    }, [product]);


    return (
        <div className="products">
            <div className="top">
                <h2>Meu cachorro...</h2>
                <div className="menu">
                    <button className="arrowBtn"><img src="assets/icons/YellowArrow.svg" className="leftArrow" alt="" /></button>
                    <button >É AGITADO</button>
                    <button>MORDE</button>
                    <button>LATE MUITO</button>
                    <button>É ANSIOSO</button>
                    <button>É ESTRESSADO</button>
                    <button className="arrowBtn"><img src="assets/icons/YellowArrow.svg" className="rightArrow" alt="" /></button>
                </div>
            </div>
            <div className="prodList">
                {productList.map((values: IProduct[]) => (
                    <React.Fragment key={values.productName}>
                        <Card
                            descriptionShort={values.descriptionShort}
                            photo={values.photo}
                            price={values.price}
                            productName={values.productName}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}