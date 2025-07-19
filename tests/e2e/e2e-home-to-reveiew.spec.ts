import { test, expect } from '@playwright/test';

test('ホーム → レビュー画面遷移', async ({ page }) => {
  // ホームページを開く
  await page.goto('http://localhost:5173/');

  // 「Start Review」ボタンが見えること
  await expect(page.getByRole('button', { name: /start review/i })).toBeVisible();

  // ボタンをクリック
  await page.getByRole('button', { name: /start review/i }).click();

  // 遷移先で「レビュー画面です」と表示されていること
  await expect(page.getByText('レビュー画面です')).toBeVisible();
});