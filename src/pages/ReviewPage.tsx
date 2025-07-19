import { useLocation } from 'react-router-dom';
import { DiffViewer } from '../components/DiffViewer';
import { CommentBox } from '../components/CommentBox'; // ←追加

export default function ReviewPage() {
  const query = new URLSearchParams(useLocation().search);
  const level = query.get('level');

  return (
    <div style={{ padding: 32 }}>
      <h2>レビュー画面です</h2>
      <p>選択されたレベル: {level}</p>
      <DiffViewer />    {/* ← ここで差分表示 */}
      <CommentBox />    {/* ← ここでコメント欄 */}
    </div>
  );
}