import { combineReducers } from "redux";
import ProductCountReducer from "./Slices/ProductCountSlice";
import AddressReducer from "./Slices/AddressSlice";
import CartSlice from "./Slices/CartSlice";

const rootReducer = combineReducers({

  ProductCount: ProductCountReducer,
  Address: AddressReducer,
  Cart: CartSlice,
  
});

export default rootReducer;