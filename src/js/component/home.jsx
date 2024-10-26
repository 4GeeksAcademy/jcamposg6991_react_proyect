import React from "react";
import Card from "./card.jsx";
import Profile from "./profile.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {

	const user = [{
		name: "Luis",
		age: 23,
		email: "luis@gmail.com"
	},
	{
		name: "Maria",
		age: 20,
		email: "maria@gmail.com"
	},
	{
		name: "Juan",
		age: 30,
		email: "juan@gmail.com"
	}]

	return (
		<>

			<Navbar />

			<div className="d-flex justify-content-around">
				{user.map((atribute, index) => (<Profile key={index} user={atribute} />))}
			</div>

			{/* <Profile user={user} /> */}

			<Card massage="gracias por venir" title="titulo1" year={2023} />

			<Card massage="feliz viaje" title="titulo2" year={2025} />
		</>
	);
};

export default Home;
