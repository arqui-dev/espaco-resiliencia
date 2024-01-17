import React from "react";

import './map.css';

const units = require("../../utils/unitList.json");

export const UnitList = () => {
    return(
        <section className="section" id="units">
            <div className="container">
                <h2 className="is-title green-text has-text-weight-bold has-text-centered is-size-1"> Unidades </h2>
            </div> 
            <div className="columns is-mobile is-centered is-multiline">
                {units.map((element: { picture: string; unitName: string; address: string; phone: string; whatsapp: string; maps: string; link:string }) => {
                    return(
                        <div className="column is-12-mobile is-6-tablet is-5-desktop is-4-widescreen">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-3by2">
                                        <img src={element.picture} alt={element.unitName}></img>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-size-4-mobile is-size-3 has-text-centered">{element.unitName}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="subtitle is-size-6-mobile is-size-5"><i className="fas fa-map-marker-alt"></i>  {element.address}</p>
                                        <p className="subtitle is-size-6-mobile is-size-5"><i className="fas fa-phone-square"></i>  {element.phone}</p>
                                        <p className="subtitle is-size-6-mobile is-size-5"> <i className="fab fa-whatsapp"></i><a href={element.link} target="_blank" rel="noopener noreferrer">  {element.whatsapp}</a></p>
                                    </div> 
                                    <footer className="card-footer">
                                        <iframe className="google-map-card" title={element.unitName} src={element.maps}></iframe>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>  
    )
}
