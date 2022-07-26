import USER_ACTION_TYPES from './user.types';

export const USER_INITIAL_STATE = {
  currentUser: null,
  adminUser: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SET_ADMIN_USER:
      return { ...state, adminUser: payload };
    default:
      return state;
  }
};
