import Movie from "./movie"
// the component function
const Movies = (props) => {
    console.log(props.movies)
    //The Components Returned JSX
    return (
        <ul className="container" >
            {props.movies.map((item, index) => (<Movie movie={item} key={item.name}></Movie>))}
         </ul>)
}

// export the component
export default Movies
