import '../../styles/form.scss';

export function Form() {
    return (
        <div className="form">
            <img src='assets/form/photo.png' alt='' />
            <div className="container">
                <h2>Se inscreva para receber novidades e promoções</h2>
                <form>
                    <div className="fakeInput">
                        <img src="assets/icons/User2.svg" alt="" />
                        <input type="text" placeholder="Digite seu nome" />
                    </div>
                    <div className="fakeInput">
                        <img src="assets/icons/Envelope.svg" alt="" />
                        <input type="text" placeholder="Digite seu e-mail" />
                    </div>
                    <button>ENVIAR</button>
                </form>
            </div>
        </div>
    )
}