import { Select } from '@mantine/core';

export type LevelSelectorProps = {
  level: number;
  onChange: (level: number) => void;
};

const levels = [
  { value: '1', label: 'Lv.1' },
  { value: '2', label: 'Lv.2' },
  { value: '3', label: 'Lv.3' },
  { value: '4', label: 'Lv.4' },
  { value: '5', label: 'Lv.5' },
];

export function LevelSelector({ level, onChange }: LevelSelectorProps) {
  return (
    <Select
      label='難易度'
      data={levels}
      value={String(level)}
      onChange={(value) => {
        if (value) {
          onChange(Number(value));
        }
      }}
      allowDeselect={false}
    />
  );
}
