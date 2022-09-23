import React from "react";
import "./Booking-pod-middle.css"
import { useState } from "react";



export default function BookingPodMiddle() {

    const [form, setForm] = useState({
        sameReturn: false,
        pickupLocation: "",
        returnLocation: ""
    });

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const style = {
        fakeInputBackgroundColor: form.sameReturn ? "#fff" : "#090",
        returnLocationDisplay: form.sameReturn ? "inline-block" : "none",
        pickupLocationWidth: form.sameReturn ? "100%" : "200%",
        // placeholder: form.sameReturn ? "Pick up location" : "Pick up & Return location"
    }
    
    return (
        <div className="booking-pod-middle-container">

            <div className="pickup-return-container">

                <div className="pickup-header">

                    <div className="header-text__container">
                    <p className="header-text">Pick up & Return location</p>
                    </div>

                    <div className="checkbox-container">
                        <input
                            id="checkbox"
                            className="checkbox"
                            type="checkbox"
                            name="sameReturn"
                            value={form.sameReturn}
                            onChange={handleChange}
                        ></input>
                        <label htmlFor="checkbox">
                            <sapn className="fake-input" style={{backgroundColor: style.fakeInputBackgroundColor}}></sapn>
                            Same Return location
                        </label>
                    </div>

                </div>

                <div className="inputs-field">
                    <div className="pickup__location-input">
                        <span className="material-symbols-outlined icon-location">location_on</span>
                        <input
                            placeholder={form.sameReturn ? "Pick up location" : "Pick up & Return location"}
                            className="pickup-location"
                            type="text"
                            name="pickupLocation"
                            value={form.pickupLocation}
                            onChange={handleChange}
                            style={{width: style.pickupLocationWidth, placeholder: style.placeholder}}
                            />
                    </div>
                    {/* //////////////////////////////////////////////// */}
                    <div className="return__location-input" style={{display: style.returnLocationDisplay}}>
                    <span className="material-symbols-outlined icon-location">location_on</span>
                    <input
                        placeholder="Return location"
                        className="return-location"
                        type="text"
                        name="returnLocation"
                        value={form.returnLocation}
                        onChange={handleChange}
                        
                    />
                    </div>

                </div>
            </div>
            <div className="datetime"></div>
        </div>
    )

}






