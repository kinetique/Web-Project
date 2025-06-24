import React, {useState} from "react";
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
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [voteResult, setVoteResult] = useState(null);

    const fetchCharacter = async (id) => {
        try {
            const response = await fetch(`http://localhost:8888/characters/${id}`);
            const data = await response.json();
            setSelectedCharacter(data);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Failed to load character info", error);
        }
    };

    const handleVoteSubmit = async () => {
        if (!selectedOption) {
            return;
        }

        try {
            const response = await fetch("http://localhost:8888/vote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: selectedOption }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setVoteResult(data);
        } catch (error) {
            console.error("Vote submission failed", error);
        }
    };

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
                <CharacterCard
                    id="viktoria"
                    name="Viktoria Fletcher"
                    imageSrc={viktoriaflw21}
                    styleClass="vik-card"
                    onClick={fetchCharacter}
                />

                <CharacterCard
                    id="prescott"
                    name="Prescott Mircea"
                    imageSrc={prescottmircea}
                    styleClass="prescott-card"
                    onClick={fetchCharacter}
                />


                <CharacterCard
                    id="marshall"
                    name="Marshall Cobham"
                    imageSrc={marshallcobham}
                    styleClass="marsh-card"
                    onClick={fetchCharacter}
                />

                <img className="vector" alt="Vector" src={vector} />
                <p className="click">
                    CLICK ON THE CARD TO LEARN MORE ABOUT THE CHARACTER
                </p>
            </div>

            <div className="quick-poll">QUICK POLL</div>

            <div className="poll">
                <p className="p">Which character did you like the most?</p>

                <label>
                    <input
                        type="radio"
                        name="character"
                        value="viktoria"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Viktoria Fletcher
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="character"
                        value="prescott"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Prescott Mircea
                </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="character"
                        value="marshall"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    Marshall Cobham
                </label>
            </div>

            <div className="confirm-button" onClick={handleVoteSubmit}>
                <div className="div-wrapper">
                    <div className="text-wrapper-5">CONFIRM</div>
                </div>
            </div>

            {voteResult && (
                <div className="modal-poll">
                    <div className="poll-result">
                        <span className="close-res" onClick={() => setVoteResult(null)}>&times;</span>
                        <h3>{voteResult.caption}</h3>
                        <img src={voteResult.image} alt={voteResult.name} style={{ maxWidth: "100%", marginTop: "10px" }} />
                    </div>
                </div>
            )}

            <img className="line-2" alt="Line" src={line97} />
            <div className="text-wrapper-6">Created by S. Chernukha</div>

            {isModalOpen && selectedCharacter && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>{selectedCharacter.name}</h2>
                        <p>{selectedCharacter.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
