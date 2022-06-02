import React from "react";
import './header.css';
import {
  Link
} from "react-router-dom";
import koovslogo from '../../assets/images/KoovsLogo.png';
import koovsicon from '../../assets/images/Icon.png';


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        
        }
        
        this.toggleClass=this.toggleClass.bind(this);
        
      }
      
       toggleClass(e){
            let classes = 'nav-menu';
            let els = document.getElementsByClassName('nav-menu open');
            if(els){
                while (els[0]) {
                    els[0].classList.remove('open');
                }
            }
            e.target.className = classes.replace('nav-menu','nav-menu open');
        }

 
    render()
    {
      
    return(
        
        
        <header>

            <div className="top-nav">
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' for="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">

                    <li className="main-menu">
                        <ul className="nav-menu">
                        <Link className="nav-link" to="/men"> Men </Link> 
                            <li> <Link className="nav-link" to="/viewall">View all</Link></li>
                            <li> New arrivals</li>
                            <li className="nav-menu" onClick={(e) =>this.toggleClass(e)}>Clothing
                                <ul>
                                    <li>All clothing </li>
                                    <li>T-shirts, Tops, Shirts </li>
                                    <li>Sweatshirts</li>
                                    <li>Dresses, Skirts</li>
                                    <li>Knitwear</li>
                                    <li>Coats, Jackets </li>
                                    <li>Trousers, Jeans, Shorts </li>
                                    <li>Underwear, Swimwear, Activewear</li> 
                                </ul>
                                
                            </li>
                            <li>Footwear</li>
                            <li> Accessories</li>
                        </ul>
                    </li>


                    <li className="main-menu">
                        <ul><span>Women </span>
                            <li> View all</li>
                            <li> New arrivals</li>
                            <li className="nav-menu" onClick={(e) =>this.toggleClass(e)}>Clothing
                                <ul>
                                    <li>All clothing </li>
                                    <li>T-shirts, Tops, Shirts </li>
                                    <li>Sweatshirts</li>
                                    <li>Dresses, Skirts</li>
                                    <li>Knitwear</li>
                                    <li>Coats, Jackets </li>
                                    <li>Trousers, Jeans, Shorts </li>
                                    <li>Underwear, Swimwear, Activewear</li> 
                                </ul>
                                
                            </li>
                            <li>Footwear</li>
                            <li> Accessories</li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul><span>Pre Loved </span>
                            <li> View all</li>
                            <li className="nav-menu" onClick={(e) =>this.toggleClass(e)}>Clothing
                                <ul>
                                    <li>All clothing </li>
                                    <li>T-shirts, Tops, Shirts </li>
                                    <li>Sweatshirts</li>
                                    <li>Dresses, Skirts</li>
                                    <li>Knitwear</li>
                                    <li>Coats, Jackets </li>
                                    <li>Trousers, Jeans, Shorts </li>
                                    <li>Underwear, Swimwear, Activewear</li> 
                                </ul>
                                
                            </li>
                            <li>Footwear</li>
                            <li> Accessories</li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul>
                            <li><span>Live shopping</span></li>
                            <li><span>Influencer collaborations</span></li>
                            <li><span>Mid season sale</span></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul>
                            <li> Log in / create account </li>
                            <li>Online support </li>
                            <li>Footwear</li>
                            <li> <u>Shipping to Denmark</u></li>
                        </ul>
                    </li>
                </ul>
                <div className="nav-brand">
                    <img src={koovslogo} alt="Koovs Logo"/>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <img src={koovsicon} height="23" alt="Koovs Search icon"/>
                    <div>Account</div>
                    <div><Link className="nav-link" to="/cart">Cart (0)</Link></div>
                </div>
            </div>
        </header>
    
    )
    }
}

export default Header;



