import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    totalAmount: 0,
  },
  reducers: {
    removeItem: (state, action) => {
      const newItems = state.items.filter((item) => item.product.id !== action.payload.id);
      state.items = newItems;
      state.totalAmount = calculateTotalAmount(newItems);
      updateLocalStorage(newItems);
    },
    increaseQuantity: (state, action) => {
      state.items.forEach((item) => {
        if (item.product.id === action.payload.id) {
          item.quantity += 1;
        }
      });
      state.totalAmount = calculateTotalAmount(state.items);
      updateLocalStorage(state.items);
    },
    decreaseQuantity: (state, action) => {
      state.items.forEach((item) => {
        if (item.product.id === action.payload.id && item.quantity !== 1) {
          item.quantity -= 1;
        }
      });
      state.totalAmount = calculateTotalAmount(state.items);
      updateLocalStorage(state.items);
    },
    sumCart: (state) => {
      state.totalAmount = calculateTotalAmount(state.items);
    },
    
  },
});

// Helper function to calculate total amount
function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

// Helper function to update local storage
function updateLocalStorage(items) {
  localStorage.setItem('cart', JSON.stringify(items));
}

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, sumCart} = CartSlice.actions;
export default CartSlice.reducer;