import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MenHomeBanner from '../components/MenHomeBanner/MenBanner';
import MenSlider from '../components/MenSlider/CategoryMenuSlider';
import MenProductSlider from '../components/MenProductSlider/MenCategoryProductSlider';
import MidSeasonSale from '../components/MidSeasonSale/MidSeasonSale';
import LiveInMen from '../components/LiveInMen/LiveInMen';

const HomePageMen = () => {
    return (
        <div className='HomeMen'>

            <Header />
            <MenHomeBanner />
            <MidSeasonSale/>
            <MenSlider/>
           <MenProductSlider/>
           <LiveInMen/>
            
            <Footer />
        </div>
    )
}

export default HomePageMen