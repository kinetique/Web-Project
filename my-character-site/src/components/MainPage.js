import React, {useState} from "react";
import "./MainPage.css";
import arrow44 from "./arrow-44.svg";
import line97 from "./Line 97.svg";
import line98 from "./Line 98.svg";
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

                <label className="custom-radio">
                    <input
                        type="radio"
                        name="character"
                        value="viktoria"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span>Viktoria Fletcher</span>
                </label>
                <br />

                <label className="custom-radio">
                    <input
                        type="radio"
                        name="character"
                        value="prescott"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span>Prescott Mircea</span>
                </label>
                <br />

                <label className="custom-radio">
                    <input
                        type="radio"
                        name="character"
                        value="marshall"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span>Marshall Cobham</span>
                </label>
            </div>

            <div className="confirm-button" onClick={handleVoteSubmit}>
                <div className="div-wrapper">
                    <div className="text-wrapper-5">CONFIRM</div>
                </div>
            </div>

            <img className="line-2" alt="Line" src={line97} />
            <div className="text-wrapper-6">Created by S. Chernukha</div>

            {isModalOpen && selectedCharacter && (
                <div className="modal">
                    <div className={`character-modal ${selectedCharacter.id}`}>
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <div className="modal-left">
                            <img src={
                                selectedCharacter.id === "viktoria"
                                    ? viktoriaflw21
                                    : selectedCharacter.id === "prescott"
                                        ? prescottmircea
                                        : marshallcobham
                            }
                                 alt={selectedCharacter.name}
                                 className="modal-image"
                            />
                        <div className="character-name">
                            <h2 className="ch-name">{selectedCharacter.name}</h2>
                            <h2 className="ch-lastname">{selectedCharacter.lastname}</h2>
                        </div>
                        </div>
                        <div className="modal-right">
                        <p>{selectedCharacter.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {voteResult && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content" style={{ backgroundColor: "#2e1f1f" }}>
                            <div className="modal-header" style={{ borderBottom: "none", alignItems: "center", color: "#ba9376" }}>
                                <h5 className="modal-title" style={{ fontWeight: "bold"}}>
                                    {voteResult.caption}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => setVoteResult(null)}
                                    style={{ filter: "invert(1) scale(0.01)" }}
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                <img
                                    src={voteResult.image}
                                    alt={voteResult.name}
                                    className="img-fluid rounded"
                                    style={{
                                        maxHeight: "80vh",
                                        objectFit: "contain",
                                        borderRadius: "10px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
