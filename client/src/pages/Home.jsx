import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

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
      <Card libro="Crepusculo" autor="Stephenie Meyer" imagenUrl="https://images.cdn3.buscalibre.com/fit-in/360x360/dd/35/dd35f3e2f5b3a25c520a261f8e74c554.jpg" />
    </div>
  );
}