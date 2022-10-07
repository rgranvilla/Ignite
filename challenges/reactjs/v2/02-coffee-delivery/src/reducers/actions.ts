import { IOrderStateDTO } from './reducer';

export enum ActionTypes {
  ADD_AMOUNT_ITEM = 'ADD_AMOUNT_ITEM',
  DECREASE_AMOUNT_ITEM = 'DECREASE_AMOUNT_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  SAVE_ORDER = 'SAVE_ORDER',
  UPDATE_TOTAL_CART = 'UPDATE_TOTAL_CART',
}

export function addAmountItemAction(id: string) {
  return {
    type: ActionTypes.ADD_AMOUNT_ITEM,
    payload: {
      id,
    },
  };
}

export function decreaseAmountItemAction(id: string) {
  return {
    type: ActionTypes.DECREASE_AMOUNT_ITEM,
    payload: {
      id,
    },
  };
}

export function deleteItemFromCartAction(id: string) {
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

export function totalCartAutoUpdate(totalCart: number) {
  return {
    type: ActionTypes.UPDATE_TOTAL_CART,
    payload: {
      totalCart,
    },
  };
}
