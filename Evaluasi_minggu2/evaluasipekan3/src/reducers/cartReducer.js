export const cartReducer = (state, action) => {
  switch(action.type) {
    case "ADD_ITEM": return [...state, action.payload];
    case "REMOVE_ITEM": return state.filter((_, idx) => idx !== action.payload);
    case "CLEAR_CART": return [];
    default: return state;
  }
};
