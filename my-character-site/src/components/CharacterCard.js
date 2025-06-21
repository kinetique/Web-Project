import React, { useState } from 'react';
import './CharacterCard.css';

export default function CharacterCard({ id, name, imageSrc }) {
    const [showInfo, setShowInfo] = useState(false);
    const [character, setCharacter] = useState(null);

    const fetchCharacter = async () => {
        try {
            const response = await fetch(`http://localhost:8888/characters/${id}`);
            const data = await response.json();
            setCharacter(data);
            setShowInfo(true);
        } catch (error) {
            console.error("Failed to load character info", error);
        }
    };

    return (
        <>
            <div className="character-card" onClick={fetchCharacter}>
                <img src={imageSrc} alt={name} />
                <h3>{name}</h3>
            </div>

            {showInfo && character && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowInfo(false)}>&times;</span>
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}
