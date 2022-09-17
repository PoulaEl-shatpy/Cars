import React from "react";
import "./Booking-pod-middle.css"




export default function BookingPodMiddle() {
    return (
        <div className="bookig-bod__middle-container">
            <div className="station-dataAndTime">
                <div className="search-input">
                    <div className="search-header">
                        <p className="search-title__text">Pick up & Return location</p>
                        <div className="Check__Box-container">
                            <div className="check__box">
                                <input type="checkbox" id="sameReturn" className="checkbox" value="sameReturn" />
                                <label htmlFor="sameReturn" className="check__box-label">
                                    <span className="fake-input"></span>
                                    <p className="label-title">Same return location</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}