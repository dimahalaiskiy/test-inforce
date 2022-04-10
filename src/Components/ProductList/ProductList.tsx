import { useState, useEffect } from 'react';
import ProductView from './../ProductView/ProductView';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

interface Products {
  products: any;
  deleteProduct: any;
}

const ProductList = ({ products, deleteProduct }: Products) => {
  const [filter, setFilter] = useState('byName');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterHandler = (event: any) => {
    setFilter(event.target.value);
  };

  const sortedProductsByName =
    products?.length > 1
      ? [...products].sort((firstProduct: any, secondProduct: any) =>
          firstProduct.name.localeCompare(secondProduct.name)
        )
      : products;

  const sortedProductsCountIncrease =
    products?.length > 1
      ? [...products].sort(
          (firstProduct: any, secondProduct: any) =>
            firstProduct.count - secondProduct.count
        )
      : products;

  const sortedProductsCountDecrease =
    products?.length > 1
      ? [...products].sort(
          (firstProduct: any, secondProduct: any) =>
            secondProduct.count - firstProduct.count
        )
      : products;

  useEffect(() => {
    if (filter === 'byName') {
      setFilteredProducts(sortedProductsByName);
    } else if (filter === 'byAscendingCount') {
      setFilteredProducts(sortedProductsCountIncrease);
    } else if (filter === 'byDescendingCount') {
      setFilteredProducts(sortedProductsCountDecrease);
    }
  }, [products, filter]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80, position: 'absolute', top: '8%' }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={filter}
          onChange={filterHandler}
          autoWidth
          label='Filter'>
          <MenuItem value={'byName'}>By Name</MenuItem>
          <MenuItem value={'byAscendingCount'}>By Ascending Count</MenuItem>
          <MenuItem value={'byDescendingCount'}>By Descending Count</MenuItem>
        </Select>
      </FormControl>
      {filteredProducts?.map((product: any) => {
        return (
          <ProductView
            deleteProductFromState={deleteProduct}
            key={product.id}
            product={product}
          />
        );
      })}
    </>
  );
};

export default ProductList;
