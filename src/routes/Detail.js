import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
    const [loading, setLoading] = useState(true); 
    const { id } = useParams();
    const [movie, setMovie] = useState(); 
    const getMovie = async () => {
        const data = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await data.json();
        console.log(json);
        return json 
    }

    useEffect(() => {
        const fetchMovie = async () => {
            const movieData = await getMovie();
            setMovie(movieData);
            setLoading(false);
        };
        fetchMovie();
    }, []);  // Add 

    return <div>
        {   
            loading 
                ? <h1>Loading...</h1> 
                : <div>
                    <h1>{movie.data.movie.title}</h1>
                    <img src={movie.data.movie.medium_cover_image}></img>
                    <p>{movie.data.movie.description_full}</p>
                </div>
        }
    </div>
}

export default Detail; 