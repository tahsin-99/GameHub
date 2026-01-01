import React from "react";

const GameDetailsCard = ({ game }) => {
  return (
    <div className="space-y-5 mt-20 sm:ml-5 text-white p-4">
      <img className="w- h-[350px] object-cover" src={game.coverPhoto} alt="" />
      <h2 className="text-2xl font-semibold">
        <span className="font-bold text-3xl">{game.title}</span>
      </h2>
      <p className="text-xl font-bold">
        Category : <span className="font-semibold text-yellow-500">{game.category}</span>
      </p>
      <p className="text-xl font-bold">
        Developer : <span className="font-semibold text-purple-600">{game.developer}</span>
      </p>
      <p className="text-xl font-bold">
        Ratings :{" "}
        <span className="font-semibold text-red-600">{game.ratings}</span>
      </p>

      <h2 className="text-2xl font-bold">Description:</h2>
      <p className="text-xl text-gray-400">{game.description}</p>
    </div>
  );
};

export default GameDetailsCard;
