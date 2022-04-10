import './App.css';
import { useState, useEffect } from 'react';
import ProductList from './Components/ProductList/ProductList';
import useModal from './Components/Modal/Modal';
import SetProduct from './Components/SetProduct/SetProduct';
import { productsApi } from './store/productsApi';
import { Button, Box } from '@mui/material';
import BarLoader from 'react-spinners/ClipLoader';

function App() {
  const [products, setProducts] = useState([]);
  const { isModalOpen, toggleModal, style } = useModal();

  const { data, error, isLoading } =
    productsApi.endpoints.getProducts.useQuery('');

  const deleteProduct = (id: string) => {
    setProducts(products.filter((product: any) => product.id !== id));
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);
  let product = '';
  return (
    <div className='Container'>
      <h1>ProductList</h1>

      {!isLoading && (
        <Button
          sx={{ marginBottom: '25px' }}
          onClick={toggleModal}
          variant='contained'>
          Add Product
        </Button>
      )}
      {isLoading && <BarLoader loading={isLoading} size={150} />}
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductList deleteProduct={deleteProduct} products={products} />
      </Box>
      <SetProduct
        productData={product}
        isOpen={isModalOpen}
        style={style}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default App;
