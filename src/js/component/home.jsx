import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {

	const card = [{
		img: "https://picsum.photos/id/" + Math.floor((Math.random() * 1000)) + "/500/325",
		cardTitle: "Title_"+ Math.floor((Math.random() * 100)),
		cardBodyTex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		img: "https://picsum.photos/id/" + Math.floor((Math.random() * 1000)) + "/500/325",
		cardTitle: "Title_"+ Math.floor((Math.random() * 100)),
		cardBodyTex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		img: "https://picsum.photos/id/" + Math.floor((Math.random() * 1000)) + "/500/325",
		cardTitle: "Title_"+ Math.floor((Math.random() * 100)),
		cardBodyTex: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	}]

	return (
		<>

			<Navbar />
			<Hero />

			<div className="container-fluid">
				<div className="row">
				{card.map((atribute, index) => (<Card key={index} card={atribute} />))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
