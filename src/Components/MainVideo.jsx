import React from 'react';

const MainVideo = () => {
        return (
                <div className='full-screen'>
                        <div className='fullscreen__body'>
                                <div className='fullscreen__title'>NiceOne Deekline Party</div>
                                <div className='fullscreen__text'>11.12.21</div>
                        </div>
                        <video autoPlay muted loop preload='auto' className='fullscreen__video' >
                                <source type='video/mp4' src="/Deekline3.mp4" />
                        </video>
                </div>
        );
};

export default MainVideo;