// src/utils/OpenWrapper.ts

export async function reviewCode(diff: string, comment: string): Promise<{score: number, advice: string}> {
    console.log('reviewCode呼び出し', diff, comment); // ←ここ
    
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // 必要に応じて4に変更
        messages: [
          { role: "system", content: "あなたはコードレビューの採点者です。diff内容と指摘コメントを見て、スコア(0-100)と短いアドバイスを日本語で返してください。" },
          { role: "user", content: `diff: ${diff}\ncomment: ${comment}` }
        ],
        max_tokens: 256,
        temperature: 0.3
      })
    });
  
    const data = await res.json();
    console.log('APIレスポンス:', data); // ←この1行
  
    // ChatGPTの返答から「スコア」と「アドバイス」をパース
    // ここはプロンプトの工夫でレスポンス形式を指定するのがコツ
    // 例： {"score": 80, "advice": "もう少し具体的に書くと良い"}
    try {
      const message = data.choices[0].message.content;
      console.log("APIからの生データ:", message); // ←ここを追加！
      const parsed = JSON.parse(message);
      return parsed;
    } catch (e) {
      return {
        score: 0,
        advice: "APIレスポンスのパースに失敗しました"
      };
    }
  }