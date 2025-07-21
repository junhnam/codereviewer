import { useState } from 'react'; // ← 追加
import { useLocation } from 'react-router-dom';
import { DiffViewer } from '../components/DiffViewer';
import { CommentBox } from '../components/CommentBox';
import { reviewCode } from '../utils/OpenWrapper'; // ← 追加

export default function ReviewPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const level = params.get('level') || '1';

  const [comment, setComment] = useState(''); // ← コメント入力
  const [result, setResult] = useState<{score?: number, advice?: string}>({}); // ← 採点結果

  async function handleReview() {
    // diffなど必要なら仮で値を渡す（今はダミーでもOK）
    const diff = 'ここにdiffが入る'; // ←今は仮値
    const res = await reviewCode(diff, comment);
    setResult(res);
  }

  return (
    <div>
      <h2>レビュー画面</h2>
      <p>選択されたレベル：{level}</p>
      <DiffViewer level={level} />
      <CommentBox value={comment} onChange={setComment} /> {/* ← 受け渡しにprops追加が必要かも */}
      <button onClick={handleReview}>採点する</button>
      {result.score && (
        <div>
          <p>スコア: {result.score}</p>
          <p>アドバイス: {result.advice}</p>
        </div>
      )}
    </div>
  );
}