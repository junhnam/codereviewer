import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DiffViewer } from '../components/DiffViewer';
import { CommentBox } from '../components/CommentBox';
import { reviewCode } from '../utils/OpenWrapper';
import { problems } from '../utils/problems';
import './ReviewPage.css';

export default function ReviewPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const level = params.get('level') || '1';
  const problemIndex = parseInt(params.get('problem') || '0', 10);

  const problem = useMemo(() => {
    const problemSet = problems[level] || problems['1'];
    return problemSet[problemIndex % problemSet.length];
  }, [level, problemIndex]);

  const [comment, setComment] = useState('');
  const [result, setResult] = useState<{ score?: number; advice?: string }>({});

  const handleReview = async () => {
    const diff = `--- a/\n+++ b/\n@@ -1 +1 @@\n- ${problem.oldCode}\n+ ${problem.newCode}`;
    const res = await reviewCode(diff, comment);
    setResult(res);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>レビュー画面</h2>
      <p>選択されたレベル：{level}</p>

      {problem && <DiffViewer oldCode={problem.oldCode} newCode={problem.newCode} />}

      <CommentBox value={comment} onChange={setComment} />

      <button onClick={handleReview} className="review-button">
        採点する
      </button>

      {result.score !== undefined && (
        <div style={{ marginTop: 24 }}>
          <p>スコア: {result.score}</p>
          <p>アドバイス: {result.advice}</p>
        </div>
      )}
    </div>
  );
}