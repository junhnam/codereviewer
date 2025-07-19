// tests/LevelSelector.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { LevelSelector } from '../src/components/LevelSelector';
import { describe, it, expect, vi } from 'vitest'; // ← globals:false の人は明示 import

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('LevelSelector', () => {
  it('calls onChange when option selected', () => {
    const handle = vi.fn();
    renderWithMantine(<LevelSelector level={1} onChange={handle} />);
    fireEvent.click(screen.getByRole('textbox'));   // メニューを開く
    fireEvent.click(screen.getByText('Lv.2'));        // Lv.2 を選択
    expect(handle).toHaveBeenCalledWith(2);
  });
});