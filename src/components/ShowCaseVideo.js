import React, { Component } from 'react'
import oceanVideoMP4 from '../videos/ocean.mp4'
import oceanVideoWEBM from '../videos/ocean.webm'

const ShowCaseVideo = () =>
    <div className="tv">
        <video preload="auto" className="showcase-video" autoPlay loop muted>
            <source src={oceanVideoMP4} type="video/mp4" />
            <source src={oceanVideoWEBM} type="video/webm" />
        </video>
    </div>

export default ShowCaseVideo