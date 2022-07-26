import { createSelector } from 'reselect';

const selectOrdersReducer = (state) => state.orders;

export const selectOrders = createSelector(
  [selectCategoryReducer],
  (ordersSlice) => ordersSlice.orders
);

export const selectOrdersMap = createSelector(
  [selectOrders],
  (orders) =>
  orders.reduce((acc, order) => {
      const { orderNumber, details } = order;
      acc[orderNumber] = details;
      return acc;
    }, {})
);

export const selectIsLoading = createSelector(
  [selectOrdersReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);