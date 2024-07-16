import React from 'react';
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';

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
      <Input
        label='input'
        required
        placeholder='Buscar libros...'
        icon
        error
        errorMessage='dasdasd'
      />
    </div>
  );
}
