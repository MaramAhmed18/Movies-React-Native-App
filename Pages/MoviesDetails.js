import { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import axios from "axios";
import MovieCard from "../Componants/MovieCard";

function MoviesDetails({ route }) {
  const { id } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Text variant="headlineMedium">Movie Details</Text>
      <MovieCard
        title={movie.title}
        description={movie.overview}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </>
  );
}

export default MoviesDetails;
