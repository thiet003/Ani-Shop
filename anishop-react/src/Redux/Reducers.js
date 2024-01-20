import { combineReducers } from "redux";
import ProductCountReducer from "./Slices/ProductCountSlice";
import AddressReducer from "./Slices/AddressSlice";

const rootReducer = combineReducers({

  ProductCount: ProductCountReducer,
  Address: AddressReducer,
  
});

export default rootReducer;