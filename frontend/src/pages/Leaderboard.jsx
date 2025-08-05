import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const Leaderboard = () => {
  const [leaderboard,setLeaderboard]=useState([]);

  useEffect(()=>{
getleaderboard()
  },[])

  const getleaderboard=async()=>{
    try {
      const res=await axios.get("http://localhost:5000/api/leaderboard");
       const sortedData = res.data.sort((a, b) => b.donations - a.donations)
    
    setLeaderboard(sortedData);
    } catch (error) {
      console.log(error);
      
    }
    
  }
  const getRankColor = (rank) => {
    switch (rank) {
      case 0: return 'bg-yellow-400'; // 1st
      case 1: return 'bg-green-300';   // 2nd
      case 2: return 'bg-amber-700';  // 3rd
      default: return 'bg-blue-500';  // others
    }
  };

  if(leaderboard.length===0){
    return <div className="text-center mt-10 text-gray-600 text-lg">Loading...</div>;
  }
  return (
     <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800"> Leaderboard</h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {leaderboard.map((member, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md border bg-white hover:shadow-lg transition duration-200`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-full ${getRankColor(index)}`}>
                {index + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold">{member.name}</h4>
              </div>
            </div>
            <div>
              <p className="text-md font-medium text-green-600">₹ {member.donations}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard;
