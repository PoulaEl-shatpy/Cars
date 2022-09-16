import React from "react";
import './HighLighted.css'



export default function HighLightedArea() {
    return (
        <section className="highLighted-area">
            <p className="highLighted-text">
                Looking for a vehicle? You’re at the right place.
            </p>
            <div className="highlighted-business-offer">
                <a href="#" className="highlughted-deal">
                    <div className="highlighted-deal-horizontal">
                        <div className="highlighted-deal-info">
                            <div className="highlighted-sticker">
                                <p className="highlighted-deal__sticker-content">UP to 20%</p>
                            </div>
                            <div className="highlighted-deal-text">
                                <div className="highlighted-deal__text-content">
                                    <p className="highlighted-deal-content-p">
                                        <span className="highlighted-deal-title">Business Rental: </span>
                                        <span className="highlighted-deal-tagline">*Special Business Offer for Vans & Trucks rentals</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="highlighted-deal-url">
                            <a href="#" className="highkighted-deal-redirect">
                                More details
                                <span class="material-symbols-outlined ar-icon">
                                    arrow_right_alt
                                </span>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}