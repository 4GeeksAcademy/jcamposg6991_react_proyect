
import React from "react";

const Card = (props) => {

    const { cardTitle, cardBodyTex, img } = props.card

    return (
        <>
            <div className="col-lg-3 col-11 m-auto text-center">
                <div className="card my-4">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">{cardBodyTex}</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;