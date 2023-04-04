import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function GameResult() {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600">Quiz Beez</h1>
        <div className="bg-white shadow-md rounded-md px-6 py-8 space-y-4">
          <p className="text-xl font-bold text-center">Results of quiz</p>
          <p className="text-black-500 text-center">
            You scored {state?.score} out of 200             
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


export default GameResult;
