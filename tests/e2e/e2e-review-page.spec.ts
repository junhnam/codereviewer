import { test, expect } from '@playwright/test';

test('レビュー画面の動作確認', async ({ page }) => {
  // レビュー画面を開く (level=1)
  await page.goto('http://localhost:5173/review?level=1');

  // 「採点する」ボタンが見えること
  await expect(page.getByRole('button', { name: /採点する/i })).toBeVisible();

  // コメントを入力する
  await page.getByRole('textbox').fill('テストコメント');

  // 「採点する」ボタンをクリック
  await page.getByRole('button', { name: /採点する/i }).click();

  // スコアが表示されること
  await expect(page.getByText(/スコア/)).toBeVisible();

  // アドバイスが表示されること
  await expect(page.getByText(/アドバイス/)).toBeVisible();
});
