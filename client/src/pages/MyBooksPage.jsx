import { PlusIcon } from '../assets/icons';
import Table from '../components/Table';
import Button from '../components/ui/Button';
import '../styles/pages/myBooksPage.css';

export default function MyBooksPage() {
  return (
    <main className='container' style={{ marginTop: '10rem' }}>
      <div className='my-books-container'>
        <h1 className='primary-title'>Mis Libros</h1>
        <div className='button-container'>
          <Button leftIcon={<PlusIcon />}>Añadir Nuevo Libro</Button>
        </div>
        <div className='table-container'>
          <Table />
        </div>
      </div>
    </main>
  );
}
