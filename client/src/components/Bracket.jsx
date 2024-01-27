import React, { useEffect, useState } from "react";

function Bracket() {
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    const initialSeeds = [];
    for (let i = 1; i <= 16; i++) {
      initialSeeds.push({
        id: i,
        firstTeam: "",
        secondTeam: "",
      });
    }
    setSeeds(initialSeeds);
  }, []);

  const seedsComp = seeds.slice(0, 8).map((seed) => (
    <div className="w-[200px] flex flex-row">
      <div className="flex items-center justify-center bg-white w-[30px] text-xl text-black rounded-sm">
        {seed.id}
      </div>
      <div className="flex   bg-red-500 rounded-lg flex-col w-full justify-center items-center">
        <h1 className="text-white text-3xl">{seed.firstTeam}</h1>
        <h1 className="text-white text-3xl">{seed.secondTeam}</h1>
      </div>
    </div>
  ));

  const blueComp = seeds
    .slice(8)
    .reverse()
    .map((seed) => (
      <div className="w-[200px] flex flex-row">
        <div className="flex items-center justify-center bg-white w-[30px] text-xl text-black rounded-sm">
          {seed.id}
        </div>
        <div className="flex   bg-blue-500 rounded-lg flex-col w-full justify-center items-center">
          <h1 className="text-white text-3xl">{seed.firstTeam}</h1>
          <h1 className="text-white text-3xl">{seed.secondTeam}</h1>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-row w-full h-full items-center justify-between bg-black">
      <div className="w-1/3 bg-black h-full flex flex-col justify-evenly items-center">
        {seedsComp}
      </div>
      <div className="w-[30px] h-full bg-white"></div>
      <div className="w-1/3 bg-black h-full flex flex-col justify-evenly items-center">
        {blueComp}
      </div>{" "}
    </div>
  );
}

export default Bracket;
