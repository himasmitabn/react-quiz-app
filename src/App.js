import { Routes, Route } from 'react-router-dom';
import QuizGame from './components/QuizGame';
import PlayGame from './components/PlayGame';
import GameResult from './components/GameResult';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<QuizGame />} />
      <Route path="/quiz" element={<PlayGame />} />
      <Route path="/results" element={<GameResult />}/>
    </Routes>
  )
}

export default App;
