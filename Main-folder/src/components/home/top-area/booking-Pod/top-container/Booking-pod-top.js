import React from "react";
import carImg from '../../../../../imgs/cars-filter.bdb1eda.png';
import vanAndTruckImg from '../../../../../imgs/vans-trucks-filter.2319eb0.png';
import prestigecar from '../../../../../imgs/vans-trucks-filter.2319eb0.png';
import "./Booking-pd-top.css"
import { useState } from "react";

export default function BookingPodTop() {
    return (
        <div className="bookig-bod__top-container">
        <div className="vehicle">
            <div className="vehicle-title">
                <p className="vehicle-title-text">What type of vehicle?</p>
            </div>
            <div className="vehicle-options">
                <div className="button__container active">
                    <button className="booking__btn">
                        <img src={carImg} alt="Car" />
                        <p className="car booking__p">Car</p>
                    </button>
                </div>

                <div className="button__container">
                    <button className="booking__btn">
                        <img src={vanAndTruckImg} alt="Van&Truck" />
                        <p className="Truck booking__p">Vans & Trucks</p>
                    </button>
                </div>

                <div className="button__container">
                    <button className="booking__btn ">
                        <img src={prestigecar} alt="Prestige" />
                        <p className="Prestige booking__p">Prestige</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}