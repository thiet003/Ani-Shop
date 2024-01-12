import React, { useEffect, useState } from "react";

export const LocationSelector = ({myLocation, locationUpdate}) => {
  console.log(myLocation);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(myLocation.cityId);

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(myLocation.districtId);

  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState(myLocation.wardId);
  
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
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
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);

    const selectedCityData = cities.find((city) => city.Id === selectedCityId);
    if (selectedCityData) {
      setDistricts(selectedCityData.Districts || []);
    }
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    setSelectedDistrict(selectedDistrictId);

    const selectedCityData = cities.find((city) => city.Id === selectedCity);
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find((district) => district.Id === selectedDistrictId) || [];
      setWards(selectedDistrictData.Wards || []);
    }
  };
  

  return (
    <div className="flex flex-col">
      <select className="form-select form-select-sm mb-3" value={selectedCity} onChange={handleCityChange} >
        <option value="" selected> Chọn tỉnh thành </option>
        {cities.map((city) => (
          <option className="bg-red-100" key={city.Id} value={city.Id}>
            {city.Name}
          </option>
        ))}
      </select>

      {selectedCity && ( <select className="form-select form-select-sm mb-3" value={selectedDistrict} onChange={handleDistrictChange} >
          <option value="" selected> Chọn quận huyện </option>
          {districts.map((district) => (
            <option key={district.Id} value={district.Id}>
              {district.Name}
            </option>
          ))}
        </select>
      )}

      {selectedDistrict && ( <select className="form-select form-select-sm" value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} >
          <option value="" selected> Chọn phường xã </option>
          {wards.map((ward) => (
            <option key={ward.Id} value={ward.Id}>
              {ward.Name}
            </option>
          ))}
        </select>
      )}

      <button className="p-2 m-3 border" onClick={() => {
        const selectedCityData = cities.find((city) => city.Id === selectedCity) || {};
        const selectedDistrictData = selectedCityData.Districts.find((district) => district.Id === selectedDistrict) || {};
        const selectedWardData = selectedDistrictData.Wards.find((ward) => ward.Id === selectedWard) || {};

        const locationInfo = {
          city: selectedCityData.Name,
          cityId: selectedCity,
          district: selectedDistrictData.Name,
          districtId: selectedDistrict,
          ward: selectedWardData.Name,
          wardId: selectedWard,
        };
        locationUpdate(locationInfo);
      }}>LƯU</button>
    </div>
  );
};


