import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';

type Props = {
  oldCode: string;
  newCode: string;
};

export function DiffViewer({ oldCode, newCode }: Props) {
  return (
    <div style={{ margin: '16px 0' }}>
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}
        showDiffOnly={false}
        leftTitle="Before"
        rightTitle="After"
      />
    </div>
  );
}

