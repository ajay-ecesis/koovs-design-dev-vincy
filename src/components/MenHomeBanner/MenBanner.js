import React from 'react';
import { Carousel } from 'react-bootstrap';
import menbannerimg from '../../assets/images/menbannerimg.png';
import MenBannerimg1 from '../../assets/images/MenBannerimg1.png';
import './menbanner.css';

const MenBanner = () => {
  return (
    <section className="men-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Carousel controls={true} interval={700}>
                        <Carousel.Item>
              
                        <div className="Menbanner-Image"><img src={MenBannerimg1} className="w-100 img-fluid" alt="DMG banner Image"/></div>
                    
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="Menbanner-Image"><img src={MenBannerimg1} alt="Koovs banner Image" className="w-100 img-fluid"/></div>
                        
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="Menbanner-Image"><img src={MenBannerimg1} alt="Koovs banner Image" className="w-100 img-fluid"/></div>
                       
                        </Carousel.Item>
                        </Carousel>
                        
                    </div>
                    <div className="col-12 col-lg-6  d-none d-lg-block">
                        <div className="category-carousel">
                        <img src={menbannerimg} alt="Koovs banner Image" className="w-100 img-fluid"/>
                        <div className='jusitfy-content-center text-center m-0'>
                        <span className='centered'>Jen Cellabos × KOOVS</span>
                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
  )
}

export default MenBanner