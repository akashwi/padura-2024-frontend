// LandingPage.jsx
import React from "react";
import styled from "styled-components";
import logo from "./assets/Logo2.png";
import backgroundVideo from "./assets/loop3.mp4";

const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    // background-color: #000000;
    color: #ffffff;
    font-family: Arial, sans-serif;
    text-align: center;

    h1 {
        padding: 0;
        margin: 0;
    }
`;

const BackgroundVideo = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100vh;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background: no-repeat;
    background-size: cover;
    transition: 1s opacity;
`;

const LandingButton = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: #61dafb;
    color: #282c34;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ffffff;
        color: #282c34;
    }
`;

const Logo = styled.img`
    width: 300px; // Adjust as needed
    height: auto;
    margin-bottom: 5px;
`;

const LandingPage = ({ onStart }) => {
    return (
        <LandingContainer>
            <BackgroundVideo
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            {/* <video src={backgroundVideo} autoPlay loop muted style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "-1"}}></video> */}
            <div>
                <Logo src={logo} alt="Logo" />
                <h1>Welcome to the Lyrics App</h1>
                <p>Click the button below to start</p>
                <LandingButton onClick={onStart}>Start</LandingButton>
            </div>
        </LandingContainer>
    );
};

export default LandingPage;
