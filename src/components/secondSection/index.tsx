import '../../styles/secondSection.scss';

export function SecondSection() {
    return (
        <div className="secSection">
            <div className="leftSide">
                <div className="card">
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <button>CONFIRA</button>
                </div>
                <img src='assets/icons/DotsGray.svg' alt='' />
            </div>
            <div className="rightSide">
                <div className="card">
                    <div className="info">
                        <h2>Assinatura Cãoselheiro</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
                        <button>SAIBA MAIS</button>
                    </div>
                    <img src='assets/secondSection/photo2.png' alt='' />
                </div>
            </div>
        </div>
    )
}