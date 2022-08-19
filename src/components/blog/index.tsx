import '../../styles/blog.scss';

export function Blog() {
    return (
        <div className="blog">
            <h2>Confira o nosso Blog</h2>
            <section>
                <button>
                    <img src='assets/icons/DownArrow.svg' className='leftArrow' alt='' />
                </button>
                <div className="cardGroup">
                    <div className="card">
                        <div className="cardImg" id="card1"></div>
                        <div className="info">
                            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                            <button>LER ARTIGO</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg" id="card2"></div>
                        <div className="info">
                            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                            <button>LER ARTIGO</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg" id="card3"></div>
                        <div className="info">
                            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                            <button>LER ARTIGO</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardImg" id="card4"></div>
                        <div className="info">
                            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                            <button>LER ARTIGO</button>
                        </div>
                    </div>
                </div>
                <button>
                    <img src='assets/icons/DownArrow.svg' className='rightArrow' alt='' />
                </button>
            </section>
            <img src='assets/icons/DotsGray.svg' className='dots' alt='' />
        </div>
    )
}