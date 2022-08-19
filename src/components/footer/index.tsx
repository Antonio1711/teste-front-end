import '../../styles/footer.scss';

export function Footer() {
    return (
        <footer>
            <div className="leftSide">
                <h2>Nos siga nas nossas redes sociais</h2>
                <div className="social">
                    <img src="assets/icons/Facebook.svg" alt="" />
                    <img src="assets/icons/Instagram.svg" alt="" />
                    <img src="assets/icons/Youtube.svg" alt="" />
                </div>
                <h2>Sobre O Cãoselheiro</h2>
                <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
            </div>
            <div className="rightSide">
                <div className="info">
                    <div className="signature">
                        <h2>ASSINATURA</h2>
                        <h2>PARCEIROS</h2>
                    </div>
                    <ul>
                        <h2>INSTITUCIONAL</h2>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Política comercial</a></li>
                        <li><a href="#">Política de devolução</a></li>
                        <li><a href="#">Regras de frete</a></li>
                    </ul>
                    <ul>
                        <h2>ATENDIMENTO</h2>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#"><img src="assets/icons/Phone.svg" alt="" /> (11) 97212-1314</a></li>
                        <li><a href="#">ocaoselheiro@ocaoselheiro.com.br</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                    </ul>
                    <div className="payment">
                        <h2>FORMAS DE PAGAMENTO</h2>
                        <div className="options">
                            <div className="option">
                                <img src="assets/icons/Card1.svg" alt="" />
                            </div>
                            <div className="option">
                                <img src="assets/icons/Card2.svg" alt="" />
                            </div>
                            <div className="option">
                                <img src="assets/icons/Card3.svg" alt="" />
                            </div>
                            <div className="option">
                                <img src="assets/icons/Card4.svg" alt="" />
                            </div>
                            <div className="option">
                                <img src="assets/icons/Card5.svg" alt="" />
                            </div>
                            <div className="option">
                                <img src="assets/icons/Card6.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                    <div className="security">
                        <h2>SEGURANÇA</h2>
                        <img src="assets/icons/LEncrypt.svg" alt="" />
                    </div>
                </div>
                <div className="copyright">
                    <p>O Cãoselheiro Comércio LTDA <br /> CNPJ: 30.324.633/0001-16 <br /> &copy; Todos os direitos reservados. 2021</p>
                    <div className="companies">
                        <img src="assets/icons/Econverse.svg" alt="" />
                        <img src="assets/icons/Vtex.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}