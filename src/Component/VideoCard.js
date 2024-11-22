import React from "react";

const VideoCard = ({ info }) => {
  const { Poster, Title, Year, imdbID } = info;
  return (
    <div className="pt-5 pr-3 m-2 w-40 transform hover:scale-110 transition-transform duration-200">
      <img className="rounded-lg" alt="thumbnail" src={Poster} />
      <ul>
        <li className="font-bold py-2">{Title}</li>
        <li className="text-xs font-bold text-gray-500">{Year}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
