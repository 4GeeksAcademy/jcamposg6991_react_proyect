
import React from "react";

const Profile = (props) => {

    const { name, age, email, img } = props.user

    return (
        <div className="card my-4">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{age}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Profile;