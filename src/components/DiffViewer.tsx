// src/components/DiffViewer.tsx

import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';

export function DiffViewer() {
  // サンプル用の旧コード・新コード
  const oldCode = `const value = 1;\nconsole.log(value);`;
  const newCode = `const value = 2;\nconsole.log(value);`;

  return (
    <div style={{ margin: '16px 0' }}>
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}        // true: 左右表示／false: 上下表示
        showDiffOnly={false}    // false: 全体を表示／true: 差分行だけ
        leftTitle="Before"
        rightTitle="After"
        // 他にも各種オプションあり（日本語化や色のカスタマイズも可能）
      />
    </div>
  );
}