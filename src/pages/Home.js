import React from 'react';
import Header from '../components/Header/Header';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import MobileStart from '../components/MobileStart/MobileStart';
import BrandItems from '../components/BrandItems/BrandItems';
import WomenFashion from '../components/WomenFashion/WomenFashion';
import MenFashion from '../components/MenFashion/MenFashion';
import TopBrands from '../components/TopBrands/TopBrands';
import Stories from '../components/Stories/Stories';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import Footer from '../components/Footer/Footer';

class Home extends React.Component {
  render()
  {
  return (
    <div className="Home">
      
      <Header/>
      <MobileStart/>
      <HomeBanner/>
      <BrandItems/>
      <WomenFashion/>
      <MenFashion/>
      <TopBrands/>
      <Stories/>
      <SocialMedia/>
      <Footer/>
    
    </div>
  );
 }
}

export default Home;

