import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProduct } from "../../context/types";

import '../../styles/modal.scss';

interface IButtonProps {
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

export function Modal(values: IProduct) {
    return (
        <div className="mask">
            <div className="prod">
                <img src={values.photo} alt={values.productName} />
                <div className="prodInfo">
                    <button onClick={(() => {
                        
                    })}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <h2>{values.productName}</h2>
                    <h3>R$ {values.price}</h3>
                    <p>{values.descriptionShort}</p>
                    <a href="#">Veja mais detalhes do produto</a>
                </div>
            </div>
        </div>
    )
}