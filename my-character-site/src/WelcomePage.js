import React, {useState} from 'react'

function WelcomePage({ onContinue }) {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleEnter = (e) => {
        e.preventDefault();
        if (username.trim() === '') {
            setError("Username is required");
        } else {
            setError('');
            onContinue(username);
        }
    };
    return (
        <div className="WelcomePage">
            <div className="logo">AMA</div>
            <h1>WELCOME</h1>
            <form onSubmit={handleEnter}>
                <label htmlFor="username">ENTER YOUR NAME TO CONTINUE</label>
                <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Continue</button>
            </form>
        </div>
    );
}

export default WelcomePage;