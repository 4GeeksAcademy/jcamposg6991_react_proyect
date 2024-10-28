
import React from "react";

const Profile = (props) => {

    const { name, age, email,img } = props.user

    return (

        <div className="card">
            <img src={img} alt="" />
            <h5>Nombre: {name}</h5>
            <h5>Edad: {age}</h5>
            <h5>Email: {email}</h5>

        </div>
    )
}

export default Profile;