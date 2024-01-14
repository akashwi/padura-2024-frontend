import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const LyricsContainer = styled.div`
    overflow: auto;
    height: 100vh;
    width: auto;
    padding: 20px;
    background-color: #282c34;
    color: #ffffff;
    font-family: Arial, sans-serif;
    line-height: 1.5;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const LyricsLine = styled.p`
    margin-bottom: 20px;
    transition: color 0.3s ease;

    &:last-child {
        color: #61dafb;
    }
`;

const Lyrics = ({ lyrics }) => {
    const lyricsContainerRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (lyricsContainerRef.current) {
                lyricsContainerRef.current.scrollTop += 1;
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <LyricsContainer ref={lyricsContainerRef}>
            {lyrics.map((line, index) => (
                <LyricsLine key={index}>{line}</LyricsLine>
            ))}
        </LyricsContainer>
    );
};

export default Lyrics;
