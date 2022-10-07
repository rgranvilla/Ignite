import { IOrderStateDTO } from './reducer';

export enum ActionTypes {
  ADD_AMOUNT_ITEM = 'ADD_AMOUNT_ITEM',
  DECREASE_AMOUNT_ITEM = 'DECREASE_AMOUNT_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  AUTO_UPDATE_ORDER = 'AUTO_UPDATE_ORDER',
  SAVE_ORDER = 'SAVE_ORDER',
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

export function autoUpdateOrderAction(field: string, value: string) {
  return {
    type: ActionTypes.AUTO_UPDATE_ORDER,
    payload: {
      field,
      value,
    },
  };
}

export function saveOrderAction(newOrder: IOrderStateDTO) {
  return {
    type: ActionTypes.SAVE_ORDER,
    payload: {
      newOrder,
    },
  };
}
