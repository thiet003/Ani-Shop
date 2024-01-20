import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setDistrict, setWard, setCities, setDistricts, setWards, resetState  } from "../Redux/Slices/AddressSlice";

export const LocationSelector = ({ myLocation, locationUpdate }) => {

  const dispatch = useDispatch();

  const cities = useSelector((state) => state.Address.cities);
  const districts = useSelector((state) => state.Address.districts);
  const wards = useSelector((state) => state.Address.wards);
  const selectedCity = useSelector((state) => state.Address.selectedCity);
  const selectedDistrict = useSelector((state) => state.Address.selectedDistrict);
  const selectedWard = useSelector((state) => state.Address.selectedWard);
  
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    )
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Error");
        }
        return Response.json();
      })
      .then((data) => {
        dispatch(setCities(data));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    dispatch(setCity(selectedCityId));

    const selectedCityData = cities.find((city) => city.Id === selectedCityId);
    if (selectedCityData) {
      dispatch(setDistricts(selectedCityData.Districts || []));
    }
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    dispatch(setDistrict(selectedDistrictId));

    const selectedCityData = cities.find((city) => city.Id === selectedCity);
    if (selectedCityData) {
      const selectedDistrictData =
        selectedCityData.Districts.find(
          (district) => district.Id === selectedDistrictId
        ) || [];
      dispatch(setWards(selectedDistrictData.Wards || []));
    }
  };

  const handleWardChange = (e) => {
    const selectedWardId = e;
    dispatch(setWard(selectedWardId));

    const selectedCityData =
      cities.find((city) => city.Id === selectedCity) || {};
    const selectedDistrictData =
      selectedCityData.Districts.find(
        (district) => district.Id === selectedDistrict
      ) || {};
    const selectedWardData =
      selectedDistrictData.Wards.find((ward) => ward.Id === selectedWardId) || {};

    const locationInfo = {
      city: selectedCityData.Name,
      cityId: selectedCity,
      district: selectedDistrictData.Name,
      districtId: selectedDistrict,
      ward: selectedWardData.Name,
      wardId: selectedWardId,
    };
    locationUpdate(locationInfo);
  };

  return (
    <div className="flex flex-col">
      <div className="h-60 overflow-auto">
        {!selectedCity && (
          <div value={selectedCity}>
            <ul>
              {cities.map((city) => (
                <li
                  className="cursor-pointer border-b-2 py-2"
                  key={city.Id}
                  onClick={() =>
                    handleCityChange({ target: { value: city.Id } })
                  }
                >
                  {city.Name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedCity && !selectedDistrict && (
          <div value={selectedDistrict}>
            <ul>
              {districts.map((district) => (
                <li
                  className="cursor-pointer border-b-2 py-2"
                  key={district.Id}
                  value={district.Id}
                  onClick={() =>
                    handleDistrictChange({ target: { value: district.Id } })
                  }
                >
                  {district.Name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedCity && selectedDistrict && !selectedWard && (
          <div value={selectedWard}>
            <ul>
              {wards.map((ward) => (
                <li
                  className="cursor-pointer border-b-2 py-2"
                  key={ward.Id}
                  value={ward.Id}
                  onClick={() => handleWardChange(ward.Id)}
                >
                  {ward.Name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};
