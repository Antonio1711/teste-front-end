import '../../styles/brands.scss';

export function Brands() {
    return (
        <div className="brands">
            <div className="top">
                <h2>Principais marcas</h2>
                <a href="#">Ver todos</a>
            </div>
            <section>
                <button>
                    <img src='assets/icons/DownArrow.svg' className='leftArrow' alt='' />
                </button>
                <div className="cardGroup">
                    <div className="card">
                        <img src='assets/brands/brand1.png' alt='' />
                    </div>
                    <div className="card">
                        <img src='assets/brands/brand2.png' alt='' />
                    </div>
                    <div className="card">
                        <img src='assets/brands/brand3.png' alt='' />
                    </div>
                    <div className="card">
                        <img src='assets/brands/brand1.png' alt='' />
                    </div>
                    <div className="card">
                        <img src='assets/brands/brand2.png' alt='' />
                    </div>
                    <div className="card">
                        <img src='assets/brands/brand3.png' alt='' />
                    </div>
                </div>
                <button>
                    <img src='assets/icons/DownArrow.svg' className='rightArrow' alt='' />
                </button>
            </section>
        </div>
    )
}