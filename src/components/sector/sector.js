import React from "react";
import "./sector.css";
import SectorCard from "./sectorCard"
import sectors from "./sector.json"

export default function Sector() {
  return (
    <div className="main" id="achievements">
      <div className="sector-main-div">
        <div className="sector-header">
          <h1 className="heading sector-heading">{"Sectors"}</h1>
        </div>
        <div className="sector-cards-div">
          {sectors.data.map((card, index) => {
            return (
              <SectorCard
                 key={index}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}