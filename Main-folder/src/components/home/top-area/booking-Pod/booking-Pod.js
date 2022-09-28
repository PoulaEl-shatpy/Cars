import React from "react";
import "./booking-Pod.css";
import BookingPodTop from "./top-container/Booking-pod-top";
import BookingPodMiddle from "./middle-container/Booking-pod-middle";
import BookingPodBottom from "./bookingPod-bottom-container/booking-pod-bottom";


export default function BookingBod() {
    return (
        <div className="hero__booking">
            <div className="hero__taplet">
                <BookingPodTop />
                <BookingPodMiddle />
                <BookingPodBottom />
                <div style={{ width: '100px', height: '100px' }}></div>
            </div>
        </div>
    )
}