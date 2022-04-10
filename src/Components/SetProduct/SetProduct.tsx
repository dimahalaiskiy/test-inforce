import { Modal, Button, Box, TextField, FormControl } from '@mui/material';
import { useState } from 'react';
import { productsApi } from './../../store/productsApi';

interface ModalProps {
  style: object;
  isOpen: boolean;
  toggleModal: any;
  productData: any;
}

const SetProduct = ({
  isOpen,
  toggleModal,
  style,
  productData,
}: ModalProps) => {
  const [comment, setComment] = useState('');

  const [product, setProduct] = useState({
    imageUrl: '',
    name: '',
    count: '',
    width: '',
    heigth: '',
    weight: '',
    comments: [],
  } as any);

  const [addProduct, {}] = productsApi.useAddProductMutation();
  const [editProduct, {}] = productsApi.useEditProductMutation();

  const setInputValue = (e: any) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const setComments = (e: any) => {
    const { value } = e.target;

    setComment(value);
  };

  const onFormSubmit = (e: any, productData: any) => {
    e.preventDefault();
    setProduct({
      ...product,
      comments: [...product.comments, comment],
    });
    if (productData === '') {
      addProduct(product);
    } else {
      console.log(product);
      editProduct({ ...productData, ...product });
    }
  };

  return (
    <>
      <Modal open={isOpen} onClose={toggleModal}>
        <Box component='form' sx={style}>
          <FormControl sx={{ marginBottom: '25px' }}>
            <TextField
              sx={{ marginBottom: '20px', width: 300 }}
              id='outlined-name'
              label='Image Url'
              name='imageUrl'
              value={product.imageUrl}
              onChange={setInputValue}
            />
            <TextField
              sx={{ marginBottom: '20px' }}
              id='outlined-name'
              label='Name'
              name='name'
              value={product.name}
              onChange={setInputValue}
            />
            <TextField
              sx={{ marginBottom: '20px' }}
              id='outlined-name'
              label='Count'
              name='count'
              type='number'
              value={product.count}
              onChange={setInputValue}
            />
            <TextField
              sx={{ marginBottom: '20px' }}
              id='outlined-name'
              label='Width'
              name='width'
              value={product.width}
              onChange={setInputValue}
            />
            <TextField
              sx={{ marginBottom: '20px' }}
              id='outlined-name'
              label='Heigth'
              name='heigth'
              value={product.heigth}
              onChange={setInputValue}
            />
            <TextField
              sx={{ marginBottom: '20px' }}
              id='outlined-name'
              label='Weigth'
              name='weight'
              value={product.weight}
              onChange={setInputValue}
            />
            <TextField
              sx={{ marginBottom: '20px', height: 100 }}
              id='standard-textarea'
              rows={4}
              multiline
              label='Comment'
              name='comments'
              value={comment}
              onChange={setComments}
            />
          </FormControl>
          <Box
            onClick={toggleModal}
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button
              onClick={(e) => onFormSubmit(e, productData)}
              sx={{ width: 100 }}
              type='submit'
              variant='contained'
              color='success'>
              Confirm
            </Button>
            <Button
              onClick={toggleModal}
              sx={{ width: 100 }}
              variant='contained'
              color='error'>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SetProduct;
