// src/components/CommentBox.tsx

type Props = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export function CommentBox({ value, onChange }: Props) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('コメントが送信されました: ' + value);
      onChange(''); // 送信後リセット
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="ここにレビューコメントを書いてください"
          style={{ width: '100%', height: 80 }}
        />
        <br />
            <button
                type="submit"
                style={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    border: "none",
                    borderRadius: 6,
                    padding: "10px 18px",
                    fontSize: 16,
                    cursor: "pointer",
                    marginTop: 8
                }}
            >
                コメント送信
            </button>
      </form>
    );
  }