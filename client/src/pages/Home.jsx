import React from 'react';
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';

export default function Home() {
  return (
    <div>
      HomePage
      <Button variant='default' size='default' disabled>
        Default Button
      </Button>
      <Button
        variant='default'
        size='default'
        leftIcon={<SearchIcon />}
        disabled
      >
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
