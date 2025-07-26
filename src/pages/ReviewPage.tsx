// src/pages/ReviewPage.tsx

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DiffViewer } from '../components/DiffViewer';
import { CommentBox } from '../components/CommentBox';
import { reviewCode } from '../utils/OpenWrapper';

export default function ReviewPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const level = params.get('level') || '1';

  const [comment, setComment] = useState(''); // コメント入力
  const [result, setResult] = useState<{ score?: number, advice?: string }>({}); // 採点結果

  async function handleReview() {
    const diff = `- const a = 1;\n+ const a = 2;`;
    const res = await reviewCode(diff, comment);
    console.log('OpenAI APIの返却値:', res);
    setResult(res);
  }

  return (
    <div style={{ padding: 32 }}>
      <h2>レビュー画面</h2>
      <p>選択されたレベル：{level}</p>
      <DiffViewer level={level} />
      <CommentBox value={comment} onChange={setComment} />
      <button
        onClick={handleReview}
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: 6,
          padding: "10px 18px",
          fontSize: 16,
          cursor: "pointer",
          marginTop: 12
        }}
      >
        採点する
      </button>
      {result.score !== undefined && result.score !== null && (
        <div style={{ marginTop: 24 }}>
          <p>スコア: {result.score}</p>
          <p>アドバイス: {result.advice}</p>
        </div>
      )}
    </div>
  );
}