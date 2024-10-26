import React from "react"

const Card = (props) => {
    return (
        <>

            <div classname="card" style={{ width: "18rem" }}>
                <img src="https://picsum.photos/200/200" class="card-img-top" alt="..." />
                <div classname="card-body">
                    <h5>{props.title}</h5>
                    <p classname="card-text">{props.massage} - {props.year}</p>
                </div>
            </div>

        </>
    )
}

export default Card