import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';

export default function App() {
  return (
    <Routes>
      {/* “/” に来たら HomePage を見せる */}
      <Route path="/" element={<HomePage />} />

      {/* “/review” に来たら ReviewPage を見せる */}
      <Route path="/review" element={<ReviewPage />} />
    </Routes>
  );
}
