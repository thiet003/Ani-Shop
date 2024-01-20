import React, { useEffect, useState } from "react";

export const LocationSelector = ({ myLocation, locationUpdate }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");

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
        setCities(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleCityChange = (e) => {
    console.log(e.target.value);
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);
    console.log(cities);
    const selectedCityData = cities.find((city) => city.Id === selectedCityId);
    console.log(selectedCityData);
    if (selectedCityData) {
      setDistricts(selectedCityData.Districts || []);
      console.log("IT WORKS");
    }
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    setSelectedDistrict(selectedDistrictId);

    const selectedCityData = cities.find((city) => city.Id === selectedCity);
    if (selectedCityData) {
      const selectedDistrictData =
        selectedCityData.Districts.find(
          (district) => district.Id === selectedDistrictId
        ) || [];
      setWards(selectedDistrictData.Wards || []);
    }
  };

  const handleWardChange = (e) => {
    const selectedWardId = e;
    setSelectedWard(selectedWardId);

    console.log("ABC" + selectedCity + selectedDistrict + selectedWard);
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
