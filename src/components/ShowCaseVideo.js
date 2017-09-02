import React, { Component } from 'react'
import Responsive from 'react-responsive';
import oceanVideoMP4 from '../videos/ocean.mp4'
import oceanVideoWEBM from '../videos/ocean.webm'

const DeskTab = ({ children }) => <Responsive minWidth={736} children={children} />;

const ShowCaseVideo = () =>
    <DeskTab>
        <div className="tv">
            <video preload="auto" className="showcase-video" autoPlay loop muted>
                <source src={oceanVideoMP4} type="video/mp4" />
                <source src={oceanVideoWEBM} type="video/webm" />
            </video>
        </div>
    </DeskTab>

export default ShowCaseVideo