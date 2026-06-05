export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter(
        (item) => item.id !== action.payload
      );

    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: action.payload.quantity,
            }
          : item
      );

    default:
      return state;
  }
};