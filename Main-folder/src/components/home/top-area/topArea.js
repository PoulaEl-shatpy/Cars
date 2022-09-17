import React from "react";
import Header from "../top-area/Header/Header";
import HighLightedArea from "./HighLight/HighLighted";
import AlertMsg from "./alertMsg/alertMsg";
import Booking from "./booking-Pod/booking-Pod";
import './topArea.css'



export default function TopArea() {

    return (

        <main>
            <AlertMsg />
            <section className="top-area-container">
                <Header />
                <HighLightedArea />
                <Booking />

            </section>
        </main>

    )
}
