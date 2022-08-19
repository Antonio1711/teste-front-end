import '../../styles/categories.scss';

export function Categories() {
    return (
        <div className="categories">
            <h2>Categorias</h2>
            <section>
                <button>
                    <img src='assets/icons/DownArrow.svg' className='leftArrow' alt='' />
                </button>
                <div className="cardGroup">
                    <div className="card">
                        <div className="bgImg" id="card1"></div>
                        <p>Brinquedos</p>
                    </div>
                    <div className="card">
                        <div className="bgImg" id="card2"></div>
                        <p>Petiscos</p>
                    </div>
                    <div className="card">
                        <div className="bgImg" id="card3"></div>
                        <p>Guias</p>
                    </div>
                    <div className="card">
                        <div className="bgImg" id="card4"></div>
                        <p>Higiene</p>
                    </div>
                </div>
                <button>
                    <img src='assets/icons/DownArrow.svg' className='rightArrow' alt='' />
                </button>
            </section>
        </div>
    )
}