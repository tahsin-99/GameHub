import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../Components/HomePage";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthenticationLayout from "../Pages/AuthenticationLayout";
import About from "../Components/About";
import GameDetails from "../Components/GameDetails";
import PrivateRoute from "../Components/PrivateRoute";
import Loading from "../Pages/Loading";
import MyProfile from "../Components/MyProfile";
import UpdateProfile from "../Components/UpdateProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    loader: async ()=>{
      const[threeGamesR,allGamesR]=await Promise.all([
        fetch('/3games.json'),
        (fetch('/games.json'))

      ]);
      const threeGames=await threeGamesR.json()
      const allGames=await allGamesR.json()
      return {threeGames,allGames}

    },
    hydrateFallbackElement:<Loading></Loading>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
     
     
       
    ],
    
  },
   {
        path: "/about",
        element:<About></About>,
      },
  
  {
    path:'/auth',
    element:<AuthenticationLayout></AuthenticationLayout>,
    children:[
    {
    path:'/auth/login',
    element:<Login></Login>
  },
   {path:'/auth/register',
    element:<Register></Register>,
  }
    ]
  
  },
  {
    path:'/game-details/:id',
    element:<PrivateRoute>
      <GameDetails></GameDetails>
    </PrivateRoute>,
    loader:()=>fetch('/games.json'),
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path:'/my-profile',
    element:<PrivateRoute>
      <MyProfile></MyProfile>
    </PrivateRoute>
  },
  {
    path:'/update-profile',
    element:<PrivateRoute>
      <UpdateProfile></UpdateProfile>
    </PrivateRoute>
  },
 
]);

export default router;
