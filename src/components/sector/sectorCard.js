import React from "react"
import './sector.css'
function SectorCard({ cardInfo }) {
    return (
  
        <div className="sector-card">
          <div className="sector-image-div">
            <img src={require(`../../images/${cardInfo.image}`)} alt="PWA" className="card-image"></img>
          </div>
          <div className="sector-detail-div">
            <h5 className="card-title">{cardInfo.title}</h5>
            <p className="card-subtitle">{cardInfo.subtitle}</p>
          </div>
          {/* <div className="certificate-card-footer">
            {cardInfo.footer.map((v, i) => {
              return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
            })}
          </div> */}
        </div>
    );
  }

export default SectorCard