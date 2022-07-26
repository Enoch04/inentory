import { ORDERS_ACTION_TYPES } from './orders.type';

export const ORDERS_INITIAL_STATE = {
    orders: [],
    isLoading: false,
    error: null
}

export const ordersReducer = (
    state = ORDERS_INITIAL_STATE,
    action = {}
  ) => {
    const { type, payload } = action;
  
    switch (type) {
      case ORDERS_ACTION_TYPES.FETCH_ORDERS_START:
        return { ...state, isLoading: true };
      case ORDERS_ACTION_TYPES.FETCH_ORDERS_SUCCESS:
        return { ...state, orders: payload, isLoading: false };
      case ORDERS_ACTION_TYPES.FETCH_ORDERS_FAILED:
        return { ...state, error: payload, isLoading: false };
      default:
        return state;
    }
  };