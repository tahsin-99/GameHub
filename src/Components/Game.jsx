import React from "react";
import { motion } from "framer-motion"
import ratings from "../assets/icon-ratings.png";
import { Link } from "react-router";

const Game = ({ game }) => {
  const gameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <Link to={`/game-details/${game.id}`}>
      <motion.div
        className="lg:w-[450px] h-full border border-gray-300 shadow-md rounded-sm mt-5 transform transition-transform duration-150  hover:-translate-y-4 active:scale-95 cursor-pointer p-2 md:mx-auto"
        variants={gameVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={game.coverPhoto}
          className="h-[316px] rounded-lg mt-2 mx-auto "
          alt=""
        />
        <p className="font-medium text-white text-[20px] ml-2">
          {game.title} : {game.category}
        </p>
        <div className="flex justify-between mt-5 p-2">
          <button className="w-[70px] h-[30px] bg-[#FFF0E1] text-orange-500 p-1">
            <div className="flex gap-3">
              <img width={20} height={16} src={ratings} alt="" />
              <p>{game.ratings}</p>
            </div>
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default Game;
