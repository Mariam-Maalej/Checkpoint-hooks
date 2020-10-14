import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigate from "./Components/Navbar";
import Movielist from "./Components/MovieList";
import Modal from "./Components/Modal";
import Filter from "./Components/Filter";
import Rating from "./Components/Rating";

const movies = [
  {
    title: "How to get away with murder",
    description:
      " The story of a black women working as a lawyer and a low professor, who's engaged in a serie of crimes.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/710iRAMzoLL._AC_SL1084_.jpg",
    rate: 3,
    id: 1
  },
  {
    title: "Mission : Impossible",
    description:
      " Ethan Hunt is framed for the murder of his IMF team during a botched mission and accused of selling government secrets to an arms dealer.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
    rate: 5,
    id: 2
  },

  {
    title: "The accountant",
    description:
      "A certified accountant with high-functioning autism who makes his living uncooking the books of criminal organizations around the world. ",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/The_Accountant_%282016_film%29.png",
    rate: 1,
    id: 3
  },
  {
    title: "Just like Heaven",
    description:
      "  In Just Like Heaven, a man falls in love with a woman only he can see. She's not a ghost, because she's not dead, but a spirit. ",
    posterUrl:
      "https://cdn.shopify.com/s/files/1/1416/8662/products/Just_Like_Heaven_2005_original_film_art_1200x.jpg?v=1574788030",
    rate: 4,
    id: 4
  },

  {
    title: "The princess switch",
    description:
      "A talented baker Competing in a Christmas baking competition, she bumps into the prince's fiancée who looks just like her. They switch lives for two days.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/The_Princess_Switch.png",
    rate: 2,
    id: 5
  },

  {
    title: "After earth",
    description:
      " In the future, an environmental cataclysm forces the human race to abandon Earth in search of a new habitable planet, eventually settling on Nova Prime planet.",
    posterUrl:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/92/13/97/20509208.jpg",
    rate: 3,
    id: 6
  },
  {
    title: "Hunger Games",
    description:
      "Katniss is in District 13 after she shatters the games forever. Under the leadership of President Coin, fights to save Peeta and a nation.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/63/MockingjayPart1Poster3.jpg",
    rate: 2,
    id: 7
  },
 
  {
    title: "The good doctor",
    description:
      "The series follows Shaun Murphy, a young autistic surgeon with savant syndrome, Wyoming, where he had a troubled past.",
    posterUrl:
      "https://fr.web.img6.acsta.net/pictures/19/10/01/16/16/1486150.jpg",
    rate: 5,
    id: 8
  },
 
];

function App() {
  const [movielist, setMovielist] = useState(movies);
  const [search, setSearch] = useState("");
  const[rate,setRate]=useState(1);

  return (
    <div className="App">
      <Navigate />
      <br></br>
      <Filter setSearch={setSearch} />
      <Rating testRating={true} rate={rate} filterByRate = {(rate) => setRate(rate)} />
      {console.log(rate)}
      <Movielist movielist={movielist} search={search} rate={rate}/>
      <br></br>
      <Modal movielist={movielist} setMovielist={setMovielist} />
      <br></br>
    </div>
  );
}
export default App;
