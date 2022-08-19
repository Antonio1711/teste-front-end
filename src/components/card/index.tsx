import { useState } from "react";
import { IProduct } from "../../context/types";

import '../../styles/card.scss';
import { Modal } from "../modal";

export function Card(product: IProduct) {
    const [modal, setModal] = useState(false);
    const [prodModal, setProdModal] = useState<IProduct>();

    const onClick = (props: IProduct) => {
        setProdModal(props);
        setModal(true);
    }

    return (
        <>
            <div className="cardProds">
                <p className="discount">40% OFF</p>
                <div className="prodInfo">
                    <img
                        src={product.photo}
                        alt={product.productName}
                        onClick={() => {
                            onClick(product);
                        }}
                    />
                    <p className="prodName">{product.productName?.toLocaleUpperCase()}</p>
                    <div className="prices">
                        <p className="oldPrice">De R$ 96,69</p>
                        <h3 className="price">Por R$ {product.price}</h3>
                        <h4 className="altPrice"><strong>R$ 85,69</strong><br />Para assinantes</h4>
                        <button>ADICIONAR</button>
                    </div>
                </div>
                <img src="assets/icons/Heart.svg" alt="" />

            </div>
            {modal ?
                <Modal
                    descriptionShort={prodModal?.descriptionShort}
                    photo={prodModal?.photo}
                    price={prodModal?.price}
                    productName={prodModal?.productName}
                />
                : null
            }
        </>
    )
}