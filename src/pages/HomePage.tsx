import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LevelSelector } from '../components/LevelSelector';
import { problems } from '../utils/problems';

export default function HomePage() {
  const [level, setLevel] = useState(1);
  const navigate = useNavigate();

  const handleStart = () => {
    const problemSet = problems[level] || problems['1'];
    const randomIndex = Math.floor(Math.random() * problemSet.length);
    navigate(`/review?level=${level}&problem=${randomIndex}`);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>コードレビュー練習ツール</h1>
      <LevelSelector level={level} onChange={setLevel} />
      <button
        onClick={handleStart}
        style={{
          marginTop: 24,
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          padding: '10px 18px',
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        Start Review
      </button>
    </div>
  );
}
