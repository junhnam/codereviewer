import { useState } from 'react';
import { LevelSelector } from './components/LevelSelector';   // ★ 追加
import './App.css';              // ロゴ周りは削除しても動きます

export default function App() {
  // ★ レベル用の state を追加（1〜5 の整数）
  const [level, setLevel] = useState(1);

  // 既存のカウンターは残しても OK（学習用のまま）
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>コードレビュー練習ツール</h1>

      {/* ★ ここが「JSX に配置」の意味：タグを書くだけで描画される */}
      <LevelSelector level={level} onChange={setLevel} />

      {/* もともと入っていた Vite のカウンター例（残すかはお好みで） */}
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>

      {/* 今後 Start ボタンなどをここに追加して Review 画面へ遷移させる予定 */}
    </>
  );
}
