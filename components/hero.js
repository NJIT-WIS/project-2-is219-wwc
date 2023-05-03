// components/Hero.js
import React from 'react';

const Hero = ({ title, description, image }) => {
  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col p-4 pb-0 md:flex-row md:items-center bg-white rounded-lg shadow-lg">
        <div className="md:w-7/12 p-3 md:pt-1">
          <h1 className="text-4xl font-semibold mb-4">{title}</h1>
          <p className="text-lg mb-4">{description}</p>
          <div className="mb-4 md:mb-0">
            <button type="button" className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg">Start Here</button>
          </div>
        </div>
        <div className="md:w-4/12 md:ml-8 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg w-full object-cover" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
