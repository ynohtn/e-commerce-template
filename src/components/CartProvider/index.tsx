import React, { FC, ReactNode, useReducer } from "react";
import CartContext from "~/contexts/cartContext";
import cartReducer from "~/reducers/cartReducer";

const CartProvider: FC<ReactNode> = ({ children }) => {
  // Init reducer to pass state data to context
  const [products, dispatchProducts] = useReducer(cartReducer, {
    products: []
  });
  // Group data
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
