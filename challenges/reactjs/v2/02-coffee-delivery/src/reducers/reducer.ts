import { produce } from 'immer';
import { IProductDTO } from '../database/db-coffee';

import { ActionTypes } from './actions';

export interface ICartProductDTO {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  amount: number;
}

export interface IAddressDTO {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface IPaymentDTO {
  address: IAddressDTO;
  paymentMethod: string;
}

export interface IOrderStateDTO {
  orderId: string;
  products: IProductDTO[];
  cart: ICartProductDTO[];
  payment: IPaymentDTO;
  deliveryPrice: number;
  cartTotal: number;
}

export function cartReducer(state: IOrderStateDTO, action: any) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS_LIST: {
      return produce(state, (draft) => {
        draft.products = [...action.payload.products];
      });
    }

    case ActionTypes.ADD_CART_PRODUCT: {
      return produce(state, (darft) => {
        darft.cart.push(action.payload.product);
      });
    }

    case ActionTypes.ADD_AMOUNT_ITEM: {
      const cartAddItemIndex = state.cart.findIndex((item) => {
        return item.productId === action.payload.id;
      });

      return produce(state, (draft) => {
        draft.cart[cartAddItemIndex].amount = state.cart[cartAddItemIndex].amount + 1;
      });
    }
    case ActionTypes.DECREASE_AMOUNT_ITEM: {
      const cartDecreaseItemIndex = state.cart.findIndex((item) => {
        return item.productId === action.payload.id;
      });
      return produce(state, (draft) => {
        draft.cart[cartDecreaseItemIndex].amount =
          state.cart[cartDecreaseItemIndex].amount - 1;
      });
    }
    case ActionTypes.DELETE_ITEM: {
      const newCartState = state.cart.filter((item) => item.id !== action.payload.id);
      return produce(state, (draft) => {
        draft.cart = newCartState;
      });
    }

    case ActionTypes.SAVE_ORDER: {
      return produce(state, (draft) => {
        draft.cart = action.payload.cart;
        draft.payment = action.payload.payment;
      });
    }

    case ActionTypes.UPDATE_TOTAL_CART: {
      return produce(state, (draft) => {
        draft.cartTotal = action.payload.totalCart;
      });
    }

    default:
      return state;
  }
}
