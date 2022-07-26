import { ORDERS_ACTION_TYPES } from './orders.type';

import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchOrdersStart = () =>
  createAction(ORDERS_ACTION_TYPES.FETCH_ORDERS_START);

export const fetchOrdersSuccess = (ordersArray) =>
  createAction(
    ORDERS_ACTION_TYPES.FETCH_ORDERS_SUCCESS,
    ordersArray
  );

export const fetchOrdersFailed = (error) =>
  createAction(ORDERS_ACTION_TYPES.FETCH_ORDERS_FAILED, error);