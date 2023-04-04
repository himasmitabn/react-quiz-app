import React from 'react'

const QuizGame = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-600 to-green-400">
    <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl mt-32">
          Quiz Beez
          </h2>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           Take our quiz and find out
          </p>
        </div>
        <div className="mt-8">
          <div className="mt-6">
            <a href="/quiz" className="block w-full px-5 py-3 text-lg font-medium text-center text-indigo-600 bg-white rounded-lg shadow-lg hover:bg-indigo-50 sm:text-xl">
              Start Game
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default QuizGame