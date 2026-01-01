import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData, useParams } from 'react-router';
import GameDetailsCard from './GameDetailsCard';

const GameDetails = () => {
    const data=useLoaderData()
    const {id}= useParams()
    
    const [game,setGame]=useState({})

    useEffect(()=>{
            const gameDetails=data.find((singleGame)=>singleGame.id==id)
            setGame(gameDetails)
    },[data,id])
    return (
        
       <>
       <title>{game.title}</title>
        <div>
            <Navbar></Navbar>
             <GameDetailsCard game={game}></GameDetailsCard>
        </div>
       </>
    );
};

export default GameDetails;