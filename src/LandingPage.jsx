// LandingPage.jsx
import React from "react";
import logo from "./assets/Logo2.png";
import backgroundVideo from "./assets/loop3.mp4";
import styled, { keyframes } from "styled-components";

const glowing = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const LandingButton = styled.button`
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:before {
        content: "";
        background: linear-gradient(
            45deg,
            #ffffff,
            #000000,
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        -webkit-filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: ${glowing} 20s linear infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
    }

    &:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #222;
        left: 0;
        top: 0;
        border-radius: 10px;
    }
`;

const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    // background-color: #282c34;
    color: #ffffff;
    font-family: 'Sevillana', cursive, Arial, sans-serif;
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
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
    background: no-repeat;
    background-size: cover;
    transition: 1s opacity;
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
