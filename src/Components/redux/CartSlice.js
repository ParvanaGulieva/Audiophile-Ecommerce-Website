import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart from local storage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price, quantity } = action.payload;
      const itemInCart = state.cart.find((item) => item.id === id);

      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else {
        state.cart.push({ id, title, image, price, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      // console.log(item);

      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item.quantity === 1) {
        // item.quantity = 1
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload
        );
        state.cart = removeItem;
      } else {
        item.quantity--;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;
