import "./bootstrap/css/bootstrap.css";
import './App.css';
import { faStar } from "@fortawesome/free-solid-svg-icons"
import data from "./data"
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";


const cardElements = data.map( (card) => {
	return(
	<Card
		key={card.id}
		star = {faStar}
		{...card}
	/>
	)
})
console.log(cardElements)

function App() {
	return (
	<div className="" style={{fontFamily: "'Poppins', sans-serif"}}>
		<Navbar/>
		<Hero/>
        <div className="container">
			<div className="d-flex flex-row overflow-auto">
				{cardElements}
			</div> 
		</div> 
	</div> 
);
}

export default App;
