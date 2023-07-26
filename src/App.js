import logo from './logo.svg';
import './App.css';

import Movies from "./components/Movies"

function App() {

  const movies = [
    {
      name: "Underrated",
      year: "2023",
      rating: "10",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZjNACrVVg3pUYQzbcbXY5PUyJNx6tZ_sYQ&usqp=CAU"

    },
    {
      name: "Bleach",
      year: "2015",
      rating: "9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqCe6HQXX25bwtW8RFflALm1OlXZg3x4ZUg&usqp=CAU"

    },
    {
      name: "Naruto",
      year: "2021",
      rating: "9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kM0hXZlWJ-OvbcnKoSvwy6qmo_ijhiUI6A&usqp=CAU"

    },
    {
      name: "jujutsu kaisen",
      year: "2020",
      rating: "9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNZWu5LcLbYfqKvrtIeJQ1ckF2ReRh1euBw&usqp=CAU"

    },
    {
      name: "Transformer",
      year: "2018",
      rating: "8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpKapNbPYM1w3SxtAzWoyWkZF14-GfXhG-w&usqp=CAU"

    }
  ]

  return (
    <div className="App">
      <Movies movies={movies}> 

      </Movies>
     
    </div>
  );
}

export default App;

