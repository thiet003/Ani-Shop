import React from "react";
import { LocationSelector } from "../Components/LocationSelector";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="p-10 h-full">
      <div className="bg-key-secondary-color h-full rounded-[68px] text-left py-10 px-7 relative">
        <div className="mb-3 flex justify-between items-center">
          <div className="font-bold text-lg">Delivery Options</div>
          <FontAwesomeIcon icon="fa-regular fa-circle-question" className="cursor-pointer" />
        </div>
        <div className="grid grid-rows-3 grid-cols-1 gap-6">
          <div className="flex items-center mb-5">
            <div className="mr-4">
              <FontAwesomeIcon className="w-8" icon="fa-solid fa-location-dot" size="xl" style={{color: "#000000",}} />
            </div>
            {location.city !== "" ? (
              <div className="text-lg leading-5">
                {location.city + ", " + location.district + ", " + location.ward}
              </div>
            ) : (
              <div>Chọn địa chỉ giao hàng</div>
            )}
            <div onClick={handleChangeClick} className="cursor-pointer min-w-fit font-bold text-sky-500">
              THAY ĐỔI
            </div>
          </div>
          <div className="flex items-center mb-5 justify-between">
            <div className="flex items-center">
              <div className="mr-4">
                <FontAwesomeIcon className="w-8" icon="fa-solid fa-truck" size="xl" style={{color: "#000000",}} />
              </div>
              <div className="text-lg leading-5">
                <div className="font-medium">Standard Delivery</div>
                <div>From 4 - 6 days</div>
              </div>
            </div>
            <div className="text-lg font-bold"><u>đ</u> -----</div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <FontAwesomeIcon icon="fa-solid fa-money-bills" size="xl" />
            </div>
            <div className="text-lg leading-5">Cash on Delivery Available (No mutual check)</div>
          </div>
        </div>
        {showLocationSelector && (
          <div className="absolute bg-gray-100 p-4 top-1/3 w-11/12 rounded-lg drop-shadow-lg">
            <LocationSelector
              myLocation={location}
              locationUpdate={locationUpdate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

