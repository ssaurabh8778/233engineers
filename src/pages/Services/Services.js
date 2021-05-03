import React from "react";
import ServicesCard from "./partials/ServicesCard";
import "./Services.css";
import { serviceCardDetails } from "./partials/servicesCardDetails";

export default () => {
  return (
    <>
      <div className="services--container">
        {serviceCardDetails.map((sector) => (
          <ServicesCard sectorName={sector.sectorName} src={sector.imgSrc} />
        ))}
      </div>
    </>
  );
};
