import React from 'react';
import GymCard from './GymCard';


const LibrartDataPromise = async () => {
  try {

    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const CardLibrary = async () => {
  const gymData = await LibrartDataPromise();
  console.log(gymData.length)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-bold text-white text-4xl md:text-5xl">THE LIBRARY</h1>
        <p className="text-[#9CA3AF] text-lg md:text-2xl mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {gymData.map((data, index) => (
          <GymCard key={index} data={data} />
        ))}
      </div>

    </div>

  );
};

export default CardLibrary;