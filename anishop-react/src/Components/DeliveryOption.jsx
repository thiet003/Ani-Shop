import React from "react";
import { LocationSelector } from "../Components/LocationSelector";
import { useState } from "react";

export const DeliveryOption = () => {
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [location, setLocation] = useState({
    city: "Thành phố Hà Nội",
    cityId: "01",
    district: "Quận Nam Từ Liêm",
    districtId: "019",
    ward: "Phường Tây Mỗ",
    wardId: "00628",
  });
  const locationUpdate = (location) => {
    setLocation(location);
    setShowLocationSelector(!showLocationSelector);
    console.log(location);
  };
  const handleChangeClick = () => {
    setShowLocationSelector(!showLocationSelector);
  };
  return (
    <div>
      DELEVERY OPTION
      {location.city !== "" ? (
        <div>
          {location.city + ", " + location.district + ", " + location.ward}
        </div>
      ) : (
        <div>Chọn địa chỉ giao hàng</div>
      )}
      <div onClick={handleChangeClick} className="cursor-pointer">
        THAY ĐỔI
      </div>
      {showLocationSelector && (
        <div className="absolute bg-amber-400 p-4 right-10 top-[100px]">
          <LocationSelector
            myLocation={location}
            locationUpdate={locationUpdate}
          />
        </div>
      )}
    </div>
  );
};
