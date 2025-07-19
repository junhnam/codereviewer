// src/pages/HomePage.tsx

import { useState } from 'react';
import { LevelSelector } from '../components/LevelSelector';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [level, setLevel] = useState(1); // レベル state
  const navigate = useNavigate();

  // 「Start Review」ボタン押下時の動作
  const handleStart = () => {
    // レビュー画面にレベルを渡して遷移
    navigate(`/review?level=${level}`);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>コードレビュー練習ツール</h1>
      <LevelSelector level={level} onChange={setLevel} />
      <button onClick={handleStart} style={{ marginTop: 24 }}>
        Start Review
      </button>
    </div>
  );
}