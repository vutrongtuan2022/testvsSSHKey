import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/header";
import Banner from "./component/banner";
import MovieList from "./component/movie_list";
function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchMovieList = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_PUBLIC_KEY}`,
        },
      };
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const response = await fetch(url, options);
      const data = await response.json();
    };
    fetchMovieList();
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
        <Banner />
        <MovieList title={"Phim Hot"} />
        <MovieList title={"Phim Hay Đề Cử"} />
      </div>
    </div>
  );
}

export default App;
