import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user,updateUser,setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUser({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
         toast("Profile updated successfully!");
        setUser({
          ...user,
      displayName: name,
      photoURL: photoURL,
    })
       
        setTimeout(()=>{
          navigate("/my-profile");
        },1500)
        
      })
      .catch(error=>{
      toast.error(`Update Failed :${error.message||'An unknown error occurred'}`)
    }) 
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <form
        onSubmit={handleUpdate}
        className="bg-[#1e1e1e] p-8 rounded-2xl w-full max-w-md space-y-6 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center">Update Information</h2>

        <div>
          <label className="block mb-2 text-gray-400">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full bg-gray-800 border-gray-700 text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full bg-[#BB86FC] text-black hover:bg-[#9B6DFD]"
        >
          Update Information
        </button>
      </form>
      
    </div>
  );
};

export default UpdateProfile;
