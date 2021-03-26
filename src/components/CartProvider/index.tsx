import { FC, ReactNode, useReducer } from 'react';
import CartContext from '~/contexts/cartContext';
import cartReducer from '~/reducers/cartReducer';

const CartProvider: FC<ReactNode> = ({ children }) => {
  const [products, dispatchProducts] = useReducer(cartReducer, {
    products: [],
    isOpen: false
  });

  const providerValue = {
    ...products,
    dispatchProducts
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.defaultProps = {};

export default CartProvider;
