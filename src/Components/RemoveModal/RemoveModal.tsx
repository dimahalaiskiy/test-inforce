import { Modal, Box, Button } from '@mui/material';
import { productsApi } from './../../store/productsApi';

const RemoveModal = ({
  style,
  isOpen,
  toggleModal,
  product,
  deleteProductFromState,
}: any) => {
  const [deleteProduct, {}] = productsApi.useDeleteProductMutation();

  const deleteProductHandler = (pruduct: any) => {
    deleteProduct(product.id);
    deleteProductFromState(product.id);
  };

  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <Box sx={style}>
        DO YOU CONFIRM REMOVE THE
        <br />"{product.name}"
        <br />
        <Button
          onClick={() => deleteProductHandler(product)}
          sx={{
            width: '75px',
            height: '30px',
            marginTop: '25px',
            marginRight: '25px',
          }}
          variant='contained'
          color='error'>
          Delete
        </Button>
        <Button
          onClick={() => toggleModal()}
          sx={{ width: '75px', height: '30px', marginTop: '25px' }}
          variant='contained'
          color='success'>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default RemoveModal;
