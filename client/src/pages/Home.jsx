import React from 'react';
import Button from '../components/ui/Button';
import { SearchIcon } from '../assets/icons';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';

export default function Home() {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
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
      <Select
        label='select'
        options={options}
        placeholder='Filtrar por género'
        error
        errorMessage='dasdasd'
      />
    </div>
  );
}
