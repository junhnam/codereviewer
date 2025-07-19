import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function StartButton() {
  const navigate = useNavigate();
  return (
    <Button color="blue" onClick={() => navigate('/review')}>
      Start Review
    </Button>
  );
}