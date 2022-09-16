import React from "react";
import Header from "../top-area/Header/Header";
import HighLightedArea from "./HighLight/HighLighted";
import AlertMsg from "./alertMsg/alertMsg";
import './topArea.css'



export default function TopArea() {

    return (

        <main>
            <AlertMsg />
            <section className="top-area-container">
                <Header />
                <HighLightedArea />
            </section>
        </main>

    )
}






    // <main className="main">
    //     <AlertMsg />
    //     <section className="top-area-container">
    //             <Header />
    //         <section className="top-section">
    //             <HighLightedArea />
    //         </section>
    //         <section className="middle-section"></section>
    //     </section>
    // </main>