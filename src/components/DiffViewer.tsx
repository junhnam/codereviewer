// src/components/DiffViewer.tsx

export function DiffViewer() {
    return (
      <div style={{ border: '1px solid #ccc', padding: 16, margin: '16px 0' }}>
        <strong>コード差分（ダミー）:</strong>
        <pre>
  {`- const value = 1;
  + const value = 2;`}
        </pre>
      </div>
    );
  }