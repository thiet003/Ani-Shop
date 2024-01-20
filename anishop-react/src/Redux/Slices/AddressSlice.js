import { createSlice } from "@reduxjs/toolkit";

const AddressSlice = createSlice({
  name: "Address",
  initialState: {
    cities: [],
    districts: [],
    wards: [],
    selectedCity: "",
    selectedDistrict: "",
    selectedWard: "",
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setDistricts: (state, action) => {
      state.districts = action.payload;
    },
    setWards: (state, action) => {
      state.wards = action.payload;
    },
    setCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setDistrict: (state, action) => {
      state.selectedDistrict = action.payload;
    },
    setWard: (state, action) => {
      state.selectedWard = action.payload;
    },
    resetState: (state) => {
      return {
        cities: [],
        districts: [],
        wards: [],
        selectedCity: "",
        selectedDistrict: "",
        selectedWard: "",
      };
    },
  },
});



export const { setCity, setDistrict, setWard, setCities, setDistricts, setWards, resetState  } = AddressSlice.actions;
export default AddressSlice.reducer;