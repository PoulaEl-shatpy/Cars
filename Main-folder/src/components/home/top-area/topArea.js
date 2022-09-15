import React from "react";
import Header from "../top-area/Header/Header";
import HighLightedArea from "./HighLight/HighLighted";
import AlertMsg from "./alertMsg/alertMsg";
import './topArea.css'



export default function TopArea() {

    return (
        <main className="main">
            <AlertMsg />
            <section className="top-area-container">
                <section className="top-section">
                    
                    <Header />
                    <HighLightedArea />
                </section>
                <section className="middle-section">
                </section>
            </section>
        </main>
    )
}