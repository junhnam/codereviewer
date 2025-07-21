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
        <button type="submit">コメント送信</button>
      </form>
    );
  }