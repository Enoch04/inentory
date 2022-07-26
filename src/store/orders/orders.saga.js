import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getOrdersHistory } from '../../utils/firebase/firebase.utils';

import { 
    fetchOrdersSuccess,
    fetchOrdersFailed,
 } from './orders.action';

import { ORDERS_ACTION_TYPES } from './orders.type';

export function* fetchOrdersAsync() {
  try {
    const ordersArray = yield call(getOrdersHistory, 'users');
    yield put(fetchOrdersSuccess(ordersArray));
  } catch (error) {
    yield put(fetchOrdersFailed(error));
  }
}

export function* onFetchOrders() {
  yield takeLatest(
    ORDERS_ACTION_TYPES.FETCH_ORDERS_START,
    fetchOrdersAsync
  );
}

export function* ordersSaga() {
  yield all([call(onFetchOrders)]);
}