import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getMovieDetails();
    setIsOpen(true);
  }, [id]);

  const getMovieDetails = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=44082499&i=${id}&r=json`
    );
    const data = await response.json();

    if (data) {
      setDetails(data);
    } else {
      console.error("No data found for the movie");
    }
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-black rounded-xl shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-white">
                {details.Title}
              </h3>
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 p-2 text-white hover:text-gray-900"
              >
                X
              </button>
            </div>

            <div className="p-6">
              {details ? (
                <>
                  <img className="w-48" alt="poster" src={details.Poster} />
                  <p className="mt-2 text-white">Year: {details.Year}</p>
                  <p className="mt-2 text-white">Plot: {details.Plot}</p>
                </>
              ) : (
                <p className="text-gray-700">Loading movie details...</p>
              )}
            </div>

            <div className="p-4 border-t text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
