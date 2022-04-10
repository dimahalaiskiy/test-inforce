import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import SetProduct from '../SetProduct/SetProduct';
import useModal from './../Modal/Modal';
import RemoveModal from '../RemoveModal/RemoveModal';

const ProductView = ({ product, deleteProductFromState }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  let { id, imageUrl, name, count, weight } = product;
  const { isModalOpen, toggleModal, style } = useModal();

  const toggleDeleteModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Box
        sx={{
          marginRight: '20px',
          marginBottom: '20px',
          border: '2px solid #000',
        }}>
        <h4 className='Heading'>{name}</h4>
        <img
          style={{ display: 'block' }}
          width='230px'
          height='200px'
          src={imageUrl}
          alt='product'
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <p className='Paragraph'>weight: {weight} g</p>
            <p className='Paragraph'>count: {count}</p>
          </Box>
          <Box
            sx={{
              width: '110px',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Button
              onClick={toggleModal}
              sx={{ width: '75px', height: '30px' }}
              variant='contained'
              color='warning'>
              Edit
            </Button>
            <Button
              onClick={toggleDeleteModal}
              sx={{ width: '75px', height: '30px' }}
              variant='contained'
              color='error'>
              Delete
            </Button>
            <RemoveModal
              deleteProductFromState={deleteProductFromState}
              product={product}
              style={style}
              isOpen={isOpen}
              toggleModal={toggleDeleteModal}>
              HI
            </RemoveModal>
          </Box>
        </Box>
      </Box>
      <SetProduct
        productData={product}
        isOpen={isModalOpen}
        style={style}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default ProductView;
