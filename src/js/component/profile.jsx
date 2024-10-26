
import React from "react";

const Profile = (props) => {

    const { name, age, email } = props.user

    return (

        <div className="card">
            <h5>Nombre: {name}</h5>
            <h5>Edad: {age}</h5>
            <h5>Email: {email}</h5>

        </div>
    )
}

export default Profile;