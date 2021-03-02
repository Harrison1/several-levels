import React from 'react'
import Responsive from 'react-responsive';
import oceanVideoMP4 from '../videos/ocean.mp4'

const DeskTab = ({ children }) => <Responsive minWidth={736} children={children} />;

const ShowCaseVideo = () =>
    <DeskTab>
        <div className="tv">
            <video preload="auto" className="showcase-video" autoPlay loop muted>
                <source src={oceanVideoMP4} type="video/mp4" />
            </video>
        </div>
    </DeskTab>

export default ShowCaseVideo