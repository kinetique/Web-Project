import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainPage} from "./components/MainPage";

function App() {
    const [user, setUser] = useState('');
    return (
        <div className="App">
            {user ? (
                <MainPage />
            ) : (
                <WelcomePage onContinue={setUser} />
                )}
        </div>
    );
}

export default App;
