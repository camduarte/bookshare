import React from 'react';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div>
      HomePage
      <Button variant='default' size='default' disabled>
        Default Button
      </Button>
      <Button variant='outline' size='sm'>
        Outline Button
      </Button>
      <Button variant='ghost' size='sm'>
        Ghost Button
      </Button>
    </div>
  );
}
