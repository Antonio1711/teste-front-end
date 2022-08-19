import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faTruck } from '@fortawesome/free-solid-svg-icons'
import '../../styles/header.scss';

export function Header() {
    return (
        <header>
            <div className="top-line">
                <ul>
                    <li>
                        <img src="assets/icons/ShieldCheck.svg" alt="Ícone de escudo" />
                        <p>Compra <strong>100% segura</strong></p>
                    </li>
                    <li>
                        <img src="assets/icons/Truck.svg" alt="Ícone de caminhão" />
                        <p><strong>Frete grátis</strong> acima de R$ 200</p>
                    </li>
                    <li>
                        <img src="assets/icons/CreditCard.svg" alt="Ícone de cartão" />
                        <p><strong>Parcele</strong> suas compras</p>
                    </li>
                </ul>
            </div>
            <div className="middle-line">
                <a href="/">
                    <img src="assets/header/logo.png" alt="logo" />
                </a>
                <div className="fake-input">
                    <input type="search" placeholder="O que você está buscando?" />
                    <img src="assets/icons/Search.svg" alt="Ícone de caminhão" />
                </div>
                <ul>
                    <li>
                        <img src="assets/icons/Sent.svg" alt="Ícone de envio" />
                    </li>
                    <li>
                        <img src="assets/icons/Heart.svg" alt="Ícone de coração" />
                    </li>
                    <li>
                        <img src="assets/icons/User.svg" alt="Ícone de usuário" />
                    </li>
                    <li>
                        <img src="assets/icons/ShoppingCart.svg" alt="Ícone de carrinho" />
                    </li>
                </ul>
            </div>
            <div className="bottom-line">
                <ul>
                    <li>
                        <p>BRINCAR</p>
                    </li>
                    <li>
                        <p>MORDER</p>
                    </li>
                    <li>
                        <p>COMER</p>
                    </li>
                    <li>
                        <p>PASSEAR</p>
                    </li>
                    <li>
                        <p>CASA E CONFORTO</p>
                    </li>
                    <li>
                        <p>EDUCAÇÃO</p>
                    </li>
                    <li>
                        <p><strong>OFERTAS</strong></p>
                    </li>
                    <li>
                        <img src="assets/icons/Crown.svg" alt="Ícone de carrinho" />
                        <p>COLEÇÃO DE OUTONO</p>
                    </li>
                </ul>
            </div>
        </header>
    )
}