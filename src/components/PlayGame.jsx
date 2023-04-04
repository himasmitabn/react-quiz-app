import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import '../App.css';

function PlayGame() {
  const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();
  const back = useNavigate();

  const questions = [
    {
			question: 'What is the capital of France?',
			answers: [
				{ text: 'New York', isCorrect: false },
				{ text: 'London', isCorrect: false },
				{ text: 'Paris', isCorrect: true },
				{ text: 'Dublin', isCorrect: false },
			],
		},
		{
			question: 'Who is CEO of Tesla?',
			answers: [
				{ text: 'Jeff Bezos', isCorrect: false },
				{ text: 'Elon Musk', isCorrect: true },
				{ text: 'Bill Gates', isCorrect: false },
				{ text: 'Tony Stark', isCorrect: false },
			],
		},
		{
			question: 'The iPhone was created by which company?',
			answers: [
				{ text: 'Apple', isCorrect: true },
				{ text: 'Intel', isCorrect: false },
				{ text: 'Amazon', isCorrect: false },
				{ text: 'Microsoft', isCorrect: false },
			],
		},
		{
			question: 'How many Harry Potter books are there?',
			answers: [
				{ text: '1', isCorrect: false },
				{ text: '4', isCorrect: false },
				{ text: '6', isCorrect: false },
				{ text: '7', isCorrect: true },
			],
		},
    {
      question: 'What is the nickname of Sachin Tendulkar?',
      answers: [
        { text: 'The Little Genius', isCorrect: false },
        { text: 'The Little Master', isCorrect: false },
        { text: 'The God of Cricket', isCorrect: false },
        { text: 'Master Blaster', isCorrect: true },
      ],
    }    
  ];

  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);

    if (answer.isCorrect) {
      setScore(score + 40);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      navigate("/results", { state: { score } });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
    setSelectedAnswer(null);
  };

  const handleFinishQuiz = () => {
    navigate("/results", { state: { score } });
  };

  const handleGoBack = () => {
    back("/");
  };

  const percentage = Math.round(
    ((currentQuestion + 1) / questions.length) * 100
  );

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-700 bg-color">
      <div className="sub-head items-center justify-between px-4 pt-5">
        <h2 className="text-lg font-bold px-5"> 40 </h2>
        <h1 className="text-2xl font-bold">
        Quiz No  {currentQuestion + 1}
        </h1>
        <button onClick={handleGoBack}>
          <FaTimes className=" w-6 h-6 ml-5" />
        </button>
      </div>

      <div
        className="flex items-center justify-center mx-2"
        style={{ maxHeight: "10%" }}
      >
        <div
          className="w-3/4 bg-gray-300 rounded-md"
          style={{ overflow: "hidden" }}
        >
          <div
            className="h-4 bg-green-500 rounded-md"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-lg ml-4 font-medium text-black-900">
          {currentQuestion + 1}/{questions.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mt-20">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-medium tex-black-900">
              {questions[currentQuestion].question}
            </h2>
          </div>
          <div className="mt-4 space-y-4 flex flex-col items-center">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className={`w-96 p-4 ml-4 text-lg  font-medium text-black-900 rounded-md ${
                  selectedAnswer && answer.isCorrect
                    ? "bg-green-500 hover:bg-green-600"
                    : ((selectedAnswer && selectedAnswer.text === answer.text)
                    ? "bg-red-500 hover:bg-red-600"
                    : "hover:bg-gray-200")
                }`}
                onClick={() => handleAnswerSelected(answer)}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center justify-between">
                  {answer.text}
                  <span>
                    {selectedAnswer &&
                      answer.isCorrect &&
                      selectedAnswer.text === answer.text && (
                        <FaCheckCircle className="w-6 h-6" />
                      )}
                  </span>
                </div>
              </button>
            ))}
          </div>
          {selectedAnswer && currentQuestion === questions.length - 1 ? (
            <div className="mt-8 text-center flex items-center justify-center">
              <button
                className=" w-96 text-center px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={handleFinishQuiz}
              >
                Show Result
              </button>
            </div>
          ) : (
            <div className="mt-8 text-center contine-btn flex items-center justify-center">
              <button
                className={`w-96 text-center px-4 py-2 text-lg font-medium text-white rounded-md ${
                  selectedAnswer
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
