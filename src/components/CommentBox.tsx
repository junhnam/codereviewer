// src/components/CommentBox.tsx

import { useState } from 'react';

export function CommentBox() {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('コメントが送信されました: ' + comment);
    setComment(''); // 送信後リセット
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="ここにレビューコメントを書いてください"
        style={{ width: '100%', height: 80 }}
      />
      <br />
      <button type="submit">コメント送信</button>
    </form>
  );
}