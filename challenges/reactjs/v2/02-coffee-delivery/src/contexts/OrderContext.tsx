import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import { data } from '../database/db-coffee';
import {
  addAmountItemAction,
  decreaseAmountItemAction,
  deleteItemFromCartAction,
  saveOrderAction,
  totalCartAutoUpdateAction,
} from '../reducers/actions';
import {
  ICartItemDTO,
  cartReducer,
  IPaymentDTO,
  IOrderStateDTO,
} from '../reducers/reducer';

interface OrderContextType {
  cart: ICartItemDTO[];
  payment: IPaymentDTO;
  totalCart: number;
  addCartItemAmount: (id: string) => void;
  decreaseCartItemAmount: (id: string) => void;
  removeCartItem: (id: string) => void;
  saveNewOrder: (paymentData: IPaymentDTO) => void;
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
      totalCart: 0,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-challenge-coffee-delivery:cart-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      } else {
        return {
          cart: [...data],
          payment: {},
          totalCart: 0,
        };
      }
    },
  );

  const { cart, payment } = orderState;
  const [totalCart, setTotalCart] = useState<number>(0);

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState);

    localStorage.setItem('@ignite-challenge-coffee-delivery:cart-state-1.0.0', stateJSON);
  }, [orderState]);

  function saveOrderInLocalStorage() {
    const stateJSON = JSON.stringify(orderState);
    localStorage.setItem('@ignite-challenge-coffee-delivery:cart-state-1.0.0', stateJSON);
  }

  function recalculateTotalCart() {
    const newTotalCart = cart
      .map(({ price, amount }) => amount * price)
      .reduce((previusValues, currentValues) => previusValues + currentValues, 0);
    setTotalCart(newTotalCart);
    dispatch(totalCartAutoUpdateAction(newTotalCart));
  }

  useEffect(() => {
    recalculateTotalCart();
  }, [cart]);

  function addCartItemAmount(id: string) {
    dispatch(addAmountItemAction(id));
  }

  function decreaseCartItemAmount(id: string) {
    dispatch(decreaseAmountItemAction(id));
  }

  function removeCartItem(id: string) {
    dispatch(deleteItemFromCartAction(id));
  }

  function saveNewOrder(paymentData: IPaymentDTO) {
    const newOrder: IOrderStateDTO = {
      cart: orderState.cart,
      payment: paymentData,
      totalCart,
    };

    dispatch(saveOrderAction(newOrder));
    saveOrderInLocalStorage();
  }

  function getOrderState() {
    return orderState;
  }

  return (
    <OrderContext.Provider
      value={{
        cart,
        payment,
        totalCart,
        addCartItemAmount,
        decreaseCartItemAmount,
        removeCartItem,
        saveNewOrder,
        getOrderState,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
