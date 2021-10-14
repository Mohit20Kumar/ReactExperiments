export const reducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    const newItems = [];
    return { ...state, items: newItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const newItems = state.items.filter((each) => each.id !== action.payload);
    return { ...state, items: newItems };
  }

  if (action.type === "INCREASE") {
    let newCart = state.items.map((each) => {
      if (each.id === action.payload) {
        return { ...each, quantity: each.quantity + 1 };
      }
      return each;
    });
    return { ...state, items: newCart };
  }

  if (action.type === "DECREASE") {
    let newCart = state.items
      .map((each) => {
        if (each.id === action.payload) {
          return { ...each, quantity: each.quantity - 1 };
        }
        return each;
      })
      .filter((each) => each.quantity !== 0);
    return { ...state, items: newCart };
  }

  if (action.type === "GET_TOTALS") {
    const { totalPrice, totalItems } = state.items.reduce(
      (total, each) => {
        const { quantity, price } = each;
        total.totalItems += quantity;
        total.totalPrice += price * quantity;

        return total;
      },
      {
        totalItems: 0,
        totalPrice: 0,
      }
    );

    return { ...state, totalPrice, totalItems };
  }

  throw new Error("no matching type!");
};
