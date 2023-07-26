// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return  <li className="movie">
            <h2>Name: {props.movie.name}</h2>
            <h2>Rating: {props.movie.rating}</h2>
            <h2>Year: {props.movie.year}</h2>
            <img src={props.movie.image}/>
            </li>
    
}

// export the component
export default Movie

