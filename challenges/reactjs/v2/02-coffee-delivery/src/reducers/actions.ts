import { IProductDTO } from '../database/db-coffee';
import { ICartProductDTO, IOrderStateDTO } from './reducer';

export enum ActionTypes {
  LOAD_PRODUCTS_LIST = 'LOAD_PRODUCTS_LIST',
  ADD_CART_PRODUCT = 'ADD_CART_PRODUCT',
  ADD_AMOUNT_ITEM = 'ADD_AMOUNT_ITEM',
  DECREASE_AMOUNT_ITEM = 'DECREASE_AMOUNT_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  SAVE_ORDER = 'SAVE_ORDER',
  UPDATE_TOTAL_CART = 'UPDATE_TOTAL_CART',
}

export function loadProductListAction(products: IProductDTO[]) {
  return {
    type: ActionTypes.LOAD_PRODUCTS_LIST,
    payload: {
      products,
    },
  };
}

export function addCartProductAction(product: ICartProductDTO) {
  return {
    type: ActionTypes.ADD_CART_PRODUCT,
    payload: {
      product,
    },
  };
}

export function incrementAmountItemAction(id: string) {
  return {
    type: ActionTypes.ADD_AMOUNT_ITEM,
    payload: {
      id,
    },
  };
}

export function decrementCartProductAction(id: string) {
  return {
    type: ActionTypes.DECREASE_AMOUNT_ITEM,
    payload: {
      id,
    },
  };
}

export function deleteCartProductAction(id: string) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      id,
    },
  };
}

export function saveOrderAction(newOrder: IOrderStateDTO) {
  return {
    type: ActionTypes.SAVE_ORDER,
    payload: { ...newOrder },
  };
}

export function cartTotalAutoUpdateAction(totalCart: number) {
  return {
    type: ActionTypes.UPDATE_TOTAL_CART,
    payload: {
      totalCart,
    },
  };
}
