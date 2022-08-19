import '../../styles/firstSection.scss';

export function FirstSection() {
    return (
        <div className="firstSection">
            <div className="content">
                <button>
                    <img src='assets/icons/LeftArrow.svg' alt='' />
                </button>
                <div className="sectionDet">
                    <h2>As melhores guias para os melhores passeios.</h2>
                    <button>CONFIRA</button>
                </div>
                <button>
                    <img src='assets/icons/RightArrow.svg' alt='' />
                </button>
            </div>
            <img src='assets/icons/Dots.svg' alt='' />
            <button className='downArrow' >
                <img src='assets/icons/DownArrow.svg' alt='' />
            </button>
        </div>
    )
}