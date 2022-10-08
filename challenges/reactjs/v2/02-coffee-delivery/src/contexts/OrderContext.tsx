import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { IProductDTO } from '../database/db-coffee';
import {
  addCartProductAction,
  cartTotalAutoUpdateAction,
  decrementCartProductAction,
  deleteCartProductAction,
  incrementAmountItemAction,
  loadProductListAction,
  saveOrderAction,
} from '../reducers/actions';
import {
  ICartProductDTO,
  cartReducer,
  IPaymentDTO,
  IOrderStateDTO,
} from '../reducers/reducer';

interface OrderContextType {
  products: IProductDTO[];
  cart: ICartProductDTO[];
  payment: IPaymentDTO;
  deliveryPrice: number;
  cartTotal: number;
  loadProductsList: (products: IProductDTO[]) => void;
  incrementCartProduct: (product: IProductDTO) => void;
  decrementCartProduct: (product: IProductDTO) => void;
  deleteCartProduct: (id: string) => void;
  saveNewOrder: (paymentData: IPaymentDTO) => void;
  getProductAmount: (id: string) => number;
  getOrderState: () => IOrderStateDTO;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProvidersProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProvidersProps) {
  const [orderState, dispatch] = useReducer(
    cartReducer,
    {
      orderId: '',
      products: [],
      cart: [],
      payment: {
        address: {
          cep: '',
          street: '',
          number: '',
          complement: '',
          neighborhood: '',
          city: '',
          state: '',
        },
        paymentMethod: '',
      },
      deliveryPrice: 350,
      cartTotal: 0,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-challenge-coffee-delivery:cart-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      } else {
        return {
          orderId: uuidV4(),
          products: [],
          cart: [],
          payment: {},
          deliveryPrice: 350,
          cartTotal: 0,
        };
      }
    },
  );

  const { orderId, cart, payment, products, deliveryPrice, cartTotal } = orderState;

  function recalculateCartTotal() {
    const newCartTotal = cart
      .map(({ price, amount }) => amount * price)
      .reduce((previusValues, currentValues) => previusValues + currentValues, 0);

    dispatch(cartTotalAutoUpdateAction(newCartTotal));
  }

  //autosave data on localStorage
  useEffect(() => {
    recalculateCartTotal();
    const stateJSON = JSON.stringify(orderState);
    localStorage.setItem('@ignite-challenge-coffee-delivery:cart-state-1.0.0', stateJSON);
  }, [cart, payment, products, cartTotal]);

  function loadProductsList(products: IProductDTO[]) {
    dispatch(loadProductListAction(products));
    console.log('[LOAD-PRODUCTS]');
  }

  function incrementCartProduct(product: IProductDTO) {
    const productOnCart = orderState.cart.find(
      ({ productId }) => productId === product.id,
    );

    if (!!productOnCart) {
      dispatch(incrementAmountItemAction(product.id));
    } else {
      const newProduct: ICartProductDTO = {
        id: uuidV4(),
        amount: 1,
        name: product.title,
        price: product.price,
        image: product.image,
        productId: product.id,
      };

      dispatch(addCartProductAction(newProduct));
    }
  }

  function decrementCartProduct(product: IProductDTO) {
    const productOnCart = orderState.cart.find(
      ({ productId }) => productId === product.id,
    );

    if (!!productOnCart && productOnCart.amount > 0) {
      dispatch(decrementCartProductAction(product.id));
    }
  }

  function deleteCartProduct(id: string) {
    dispatch(deleteCartProductAction(id));
  }

  /*||^^^^^^^^^^^^^^^||          
  /*||   Revisado    ||
  /*********************/

  function saveNewOrder(paymentData: IPaymentDTO) {
    const newOrder: IOrderStateDTO = {
      ...orderState,
      payment: paymentData,
    };

    dispatch(saveOrderAction(newOrder));
  }

  function getProductAmount(productId: string) {
    const product = orderState.cart.find((item) => item.productId === productId);
    const amount = product?.amount || 0;
    return amount;
  }

  function getOrderState() {
    return orderState;
  }

  return (
    <OrderContext.Provider
      value={{
        products,
        cart,
        payment,
        deliveryPrice,
        cartTotal,
        loadProductsList,
        incrementCartProduct,
        decrementCartProduct,
        deleteCartProduct,
        saveNewOrder,
        getProductAmount,
        getOrderState,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
