// src/utils/OpenAIWrapper.ts

export async function reviewCode(diff: string, comment: string): Promise<{score: number, advice: string}> {
    // OpenAI API 叩く仮ロジック
    // 実際はfetch/axiosでAPIリクエストを送る
    // ここではダミーを返す
    return {
      score: 80,
      advice: "良い指摘ですが、もう少し具体的に書くとさらに良くなります。"
    };
  }