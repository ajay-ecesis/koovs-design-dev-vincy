import React from 'react';
import './liveinmen.css'
import koovsvideoicon from '../../assets/images/playbutton.png';
import videomenpage from '../../assets/images/videomenpage.png';
import comingsoon from '../../assets/images/comingsoonmenpage.png';

const LiveInMen = () => {
    return (
        <>
            <section className='liveinmen'>
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-12 col-lg-6">  
                            <img alt="video-men" src={videomenpage} className='videomenpage' />
                                <span>
                                    <img alt="video play icon" src={koovsvideoicon} />
                                </span>
                           </div>
                        <div className="col-12 col-lg-6">
                            <img alt="coming-soon" src={comingsoon} className='comingsoon' />
                        </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default LiveInMen