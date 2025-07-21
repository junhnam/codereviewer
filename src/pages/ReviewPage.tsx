import { useLocation } from 'react-router-dom';
import { DiffViewer } from '../components/DiffViewer';
import { CommentBox } from '../components/CommentBox';

export default function ReviewPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const level = params.get('level') || '1';

  return (
    <div>
      <h2>レビュー画面</h2>
      <p>選択されたレベル：{level}</p>
      <DiffViewer level={level} />
      <CommentBox />
    </div>
  );
}