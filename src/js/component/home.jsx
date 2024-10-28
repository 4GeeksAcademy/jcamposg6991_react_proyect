import React from "react";
import Card from "./card.jsx";
import Profile from "./profile.jsx";
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {

	const user = [{
		img: "https://picsum.photos/id/" + Math.floor((Math.random() * 1000)) + "/500/325",
		name: "Luis",
		age: 23,
		email: "luis@gmail.com"
	},
	{
		img: "https://picsum.photos/id/" + Math.floor((Math.random() * 1000)) + "/500/325",
		name: "Maria",
		age: 20,
		email: "maria@gmail.com"
	},
	{
		img: "https://picsum.photos/id/" + Math.floor((Math.random() * 1000)) + "/500/325",
		name: "Juan",
		age: 30,
		email: "juan@gmail.com"
	}]

	return (
		<>

			<Navbar />
			<Hero />

			<div className="container-fluid">
				<div className="row bg-danger">
				{user.map((atribute, index) => (<Profile key={index} user={atribute} />))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
