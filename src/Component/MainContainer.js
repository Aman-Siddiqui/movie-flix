import React, { useState } from "react";
import VideoContainer from "./VideoContainer";
import SelectButton from "./SelectButton";

const MainContainer = () => {
  const [catagory, setCatagory] = useState("movies");

  const handleCatagory = (newCatagory) => {
    setCatagory(newCatagory);
  };

  return (
    <div className="h-screen w-full bg-black overflow-auto">
      <SelectButton onSelect={handleCatagory} />
      <VideoContainer catagory={catagory} />
    </div>
  );
};

export default MainContainer;
