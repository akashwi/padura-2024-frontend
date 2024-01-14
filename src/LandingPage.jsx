// LandingPage.jsx
import React from "react";
import logo from "./assets/Logo2.png";
import backgroundVideo from "./assets/loop3.mp4";
import styled from "styled-components";

const LandingButton = styled.button`
    background-color: #000000;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover,
    &:focus {
        background-color: #f082ac;
    }
`;

const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    // background-color: #282c34;
    color: #ffffff;
    font-family: "Sevillana", cursive, Arial, sans-serif;
    text-align: center;

    h1 {
        padding: 0;
        margin: 0;
        font-size: 8vw;
    }

    p {
        font-size: 4vw;
    }
`;

const BackgroundVideo = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
    background: no-repeat;
    background-size: cover;
    transition: 1s opacity;
`;

const Logo = styled.img`
    width: 60vw; // Adjust as needed
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
