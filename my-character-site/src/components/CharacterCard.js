import React from 'react';
import './CharacterCard.css';

export default function CharacterCard({ id, name, imageSrc, styleClass = "", onClick }) {
    const getOverlayClass = () => {
        if (id === "viktoria") return "overlap-1";
        if (id === "prescott") return "overlap-2";
        if (id === "marshall") return "overlap-3";
        return "";
    };

    const getImageClass = () => {
        if (id === "viktoria") return "viktoriaflw";
        if (id === "prescott") return "prescott";
        if (id === "marshall") return "marshall";
        return "";
    };

    return (
        <div className={styleClass} onClick={() => onClick(id)} style={{ cursor: "pointer" }}>
            <div className={getOverlayClass()}>
                <img className={getImageClass()} src={imageSrc} alt={name} />
                <div className="card-line"></div>
                <div className="card-name">{name.toUpperCase()}</div>
            </div>
        </div>
    );
}
