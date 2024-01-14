// App.js
import React, { useState, useEffect } from "react";
import Lyrics from "./Lyrics";
import LandingPage from "./LandingPage";

const App = () => {
    const [start, setStart] = useState(false);

    // Dummy lyrics data
    const [lyrics, setLyrics] = useState([]);

    useEffect(() => {
        // Fetch lyrics from the Express app
        const fetchLyrics = () => {
            fetch("https://padura-2024-backend-559beec823e3.herokuapp.com/api/lyrics")
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.lyric);
                    setLyrics(data.lyric);
                })
                .catch((error) =>
                    console.error("Error fetching lyrics:", error)
                );
        };

        // Fetch lyrics immediately
        fetchLyrics();
        // Fetch lyrics every 5 seconds
        const intervalId = setInterval(fetchLyrics, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleStart = () => {
        setStart(true);
    };

    return start ? (
        <Lyrics lyrics={lyrics} />
    ) : (
        <LandingPage onStart={handleStart} />
    );
};

export default App;
