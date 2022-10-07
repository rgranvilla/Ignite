import { produce } from 'immer';

import { ActionTypes } from './actions';

export interface ICartItemDTO {
  id: string;
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
  cart: ICartItemDTO[];
  payment: IPaymentDTO;
}

export function cartReducer(state: IOrderStateDTO, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_AMOUNT_ITEM: {
      const cartAddItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      return produce(state, (draft) => {
        draft.cart[cartAddItemIndex].amount = state.cart[cartAddItemIndex].amount + 1;
      });
    }
    case ActionTypes.DECREASE_AMOUNT_ITEM: {
      const cartDecreaseItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
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
        draft = action.payload.newOrder;
      });
    }
    default:
      return state;
  }
}
