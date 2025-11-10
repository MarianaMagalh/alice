import './CardGira.css';

export default function CardGira({ img, info }) {
    return (
        <div className="wrapper">

            <div className="flip-container">

                <div className="flip flip-left">

                    <div className="front front-left">
                        <div className="circle">
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className="back back-left">
                        <p>{info}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
