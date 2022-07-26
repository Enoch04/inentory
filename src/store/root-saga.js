import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/category.saga';
import { ordersSaga } from './orders/orders.saga';

export function* rootSaga(){
    yield all([call(categoriesSaga),call(ordersSaga)])
};