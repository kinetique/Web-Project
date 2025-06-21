import React from "react";
import arrow44 from "./arrow-44.svg";
import image from "./line97-1.svg";
import line96 from "./Line 96.svg";
import line97 from "./Line 97.svg";
import line982 from "./line98-1.svg";
import line98 from "./Line 98.svg";
import "./MainPage.css";
import vector from "./Vector.svg";
import viktoriaflw21 from "./viktoriaflw2.png";
import prescottmircea from "./prescottmircea.png";
import marshallcobham from "./marshall_cobham.png";
import CharacterCard from "./CharacterCard";

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="text-wrapper">Alzbeta Mircea Academy</div>

            <p className="subtitle">
                A BOOK WHICH PLOT WAS INVENTED BY ME AND MY FRIENDS
            </p>

            <p className="scroll-text">SCROLL TO SEE SOME OF THE CHARACTERS</p>
            <img className="arrow" alt="Arrow" src={arrow44} />
            <img className="line-1" alt="Line" src={line98} />

            <div className="overlap">

                <div className="vik-card">
                    <div className="overlap-1">
                        <img
                            className="viktoriaflw"
                            alt="Viktoriaflw"
                            src={viktoriaflw21}
                        />

                        <div className="div">VIKTORIA FLETCHER</div>

                        <img className="line" alt="Line" src={line96} />
                    </div>
                </div>

                <div className="prescott-card">
                    <div className="overlap-2">
                        <img
                            className="prescott"
                            alt="Prescott Mircea"
                            src={prescottmircea}
                        />
                        <div className="div">
                            PRESCOTT
                            <br />
                            MIRCEA
                        </div>

                        <img className="line" alt="Line" src={image} />
                    </div>
                </div>

                <div className="marsh-card">
                    <div className="overlap-3">
                        <img
                            className="marshall"
                            alt="Marshall Cobham"
                            src={marshallcobham}
                        />
                        <div className="div">
                            MARSHALL
                            <br />
                            COBHAM
                        </div>

                        <img className="line" alt="Line" src={line982} />
                    </div>
                </div>

                <img className="vector" alt="Vector" src={vector} />
                <p className="click">
                    CLICK ON THE CARD TO LEARN MORE ABOUT THE CHARACTER
                </p>
            </div>

            <div className="quick-poll">QUICK POLL</div>

            <div className="poll">
                <p className="p">Which character did you like the most?</p>

                <div className="rectangle" />

                <div className="rectangle-2" />

                <div className="rectangle-3" />

                <div className="text-wrapper-2">Viktoria Fletcher</div>

                <div className="text-wrapper-3">Prescott Mircea</div>

                <div className="text-wrapper-4">Marshall Cobham</div>
            </div>

            <div className="confirm-button">
                <div className="div-wrapper">
                    <div className="text-wrapper-5">CONFIRM</div>
                </div>
            </div>

            <img className="line-2" alt="Line" src={line97} />
            <div className="text-wrapper-6">Created by S. Chernukha</div>
        </div>
    );
};
