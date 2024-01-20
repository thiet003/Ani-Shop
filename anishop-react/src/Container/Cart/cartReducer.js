import {
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  SUM_PRICE,
} from "./cartActions";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  totalAmount: 0,
};
function updateLocalStorage(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}

function cartReducer(state = initialState, action) {
  let newItems = [...state.items];
  var totalAmount = 0;
  switch (action.type) {
    case REMOVE_ITEM:
      totalAmount = 0;
      const result = newItems.filter((item) => {
        return item.product.id != action.payload.id;
      });
      result.forEach((item) => {
        totalAmount += item.product.price * item.quantity;
      });
      updateLocalStorage(result);
      return {
        ...state,
        items: result,
        totalAmount: totalAmount,
      };
    case INCREASE_QUANTITY:
      totalAmount = 0;
      newItems.forEach((item) => {
        if (item.product.id == action.payload.id) {
          item.quantity += 1;
        }
        totalAmount += item.product.price * item.quantity;
      });
      updateLocalStorage(newItems);
      return {
        ...state,
        items: newItems,
        totalAmount: totalAmount,
      };
    case DECREASE_QUANTITY:
      totalAmount = 0;
      newItems.forEach((item) => {
        if (item.product.id == action.payload.id) {
          if (item.quantity != 1) {
            item.quantity -= 1;
          }
        }
        totalAmount += item.product.price * item.quantity;
      });
      updateLocalStorage(newItems);
      return {
        ...state,
        items: newItems,
        totalAmount: totalAmount,
      };
    case SUM_PRICE:
      totalAmount = 0;
      newItems.forEach((item) => {
        totalAmount += item.product.price * item.quantity;
      });
      return {
        ...state,
        totalAmount: totalAmount,
      };
    default:
      return state;
  }
}

export default cartReducer;
