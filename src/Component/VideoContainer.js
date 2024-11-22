import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { BsSearch } from "react-icons/bs";
import PopUp from "./PopUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const VideoContainer = ({ catagory }) => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  useEffect(() => {
    getMultiplePagesMovies(catagory);
  }, [catagory]);

  const getMultiplePagesMovies = async (catagory) => {
    const totalPages = 5;
    let allMovies = [];
    const type = catagory.toLowerCase();
    console.log(type);

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=44082499&s=movie&type=${type}&r=json&page=${page}`
      );
      const data = await response.json();

      if (data.Search) {
        allMovies = [...allMovies, ...data.Search];
      }
    }

    setMovies(allMovies);
    setFilteredSearch(allMovies);
  };

  return (
    <div>
      <div className="p-1 m-1 flex items-center ">
        <input
          className="px-4 py-2 ml-2 w-2/6 rounded-l-full"
          placeholder="Search movies here"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-3  bg-red-800 rounded-r-full "
          onClick={() => {
            const filtered = movies.filter((movie) =>
              movie.Title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredSearch(filtered);
          }}
        >
          <BsSearch />
        </button>
      </div>

      <Router>
        <div className="w-full h-full bg-black flex flex-wrap">
          {filteredSearch.length > 0 ? (
            filteredSearch.map((movie) => (
              <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                <VideoCard info={movie} />
              </Link>
            ))
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>

        <Routes>
          <Route path="/movie/:id" element={<PopUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default VideoContainer;
