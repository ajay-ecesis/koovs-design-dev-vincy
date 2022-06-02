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
                            <li> <Link className="nav-link" to="/view-all">View all</Link></li>
                            <li> <Link className="nav-link" to="/new-arrivals">New arrivals</Link></li>
                            <li className="nav-menu" onClick={(e) =>this.toggleClass(e)}>Clothing
                                <ul>
                                    <li><Link className="nav-link" to="/">All clothing </Link></li>
                                    <li><Link className="nav-link" to="/">T-shirts, Tops, Shirts </Link></li>
                                    <li><Link className="nav-link" to="/">Sweatshirts</Link></li>
                                    <li><Link className="nav-link" to="/">Dresses, Skirts</Link></li>
                                    <li><Link className="nav-link" to="/">Knitwear</Link></li>
                                    <li><Link className="nav-link" to="/">Coats, Jackets </Link></li>
                                    <li><Link className="nav-link" to="/">Trousers, Jeans, Shorts</Link> </li>
                                    <li><Link className="nav-link" to="/">Underwear, Swimwear, Activewear</Link></li> 
                                </ul>
                                
                            </li>
                            <li><Link className="nav-link" to="/">Footwear</Link></li>
                            <li> <Link className="nav-link" to="/">Accessories</Link></li>
                        </ul>
                    </li>


                    <li className="main-menu">
                        <ul><Link className="nav-link" to="/women"> Women </Link>
                        <li> <Link className="nav-link" to="/view-all">View all</Link></li>
                            <li> <Link className="nav-link" to="/new-arrivals">New arrivals</Link></li>
                            <li className="nav-menu" onClick={(e) =>this.toggleClass(e)}>Clothing
                                <ul>
                                    <li><Link className="nav-link" to="/">All clothing </Link></li>
                                    <li><Link className="nav-link" to="/">T-shirts, Tops, Shirts </Link></li>
                                    <li><Link className="nav-link" to="/">Sweatshirts</Link></li>
                                    <li><Link className="nav-link" to="/">Dresses, Skirts</Link></li>
                                    <li><Link className="nav-link" to="/">Knitwear</Link></li>
                                    <li><Link className="nav-link" to="/">Coats, Jackets </Link></li>
                                    <li><Link className="nav-link" to="/">Trousers, Jeans, Shorts</Link> </li>
                                    <li><Link className="nav-link" to="/">Underwear, Swimwear, Activewear</Link></li> 
                                </ul>
                                
                            </li>
                            <li><Link className="nav-link" to="/">Footwear</Link></li>
                            <li> <Link className="nav-link" to="/">Accessories</Link></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul><Link className="nav-link" to="/women"> Pre Loved </Link>
                            <li> <Link className="nav-link" to="/view-all">View all</Link></li>
                            <li className="nav-menu" onClick={(e) =>this.toggleClass(e)}>Clothing
                                <ul>
                                     <li><Link className="nav-link" to="/">All clothing </Link></li>
                                    <li><Link className="nav-link" to="/">T-shirts, Tops, Shirts </Link></li>
                                    <li><Link className="nav-link" to="/">Sweatshirts</Link></li>
                                    <li><Link className="nav-link" to="/">Dresses, Skirts</Link></li>
                                    <li><Link className="nav-link" to="/">Knitwear</Link></li>
                                    <li><Link className="nav-link" to="/">Coats, Jackets </Link></li>
                                    <li><Link className="nav-link" to="/">Trousers, Jeans, Shorts</Link> </li>
                                    <li><Link className="nav-link" to="/">Underwear, Swimwear, Activewear</Link></li> 
                                </ul>
                                
                            </li>
                            <li><Link className="nav-link" to="/">Footwear</Link></li>
                            <li> <Link className="nav-link" to="/">Accessories</Link></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul>
                            <li><Link className="nav-link" to="/">Live shopping</Link></li>
                            <li><Link className="nav-link" to="/">Influencer collaborations</Link></li>
                            <li><Link className="nav-link" to="/">Mid season sale</Link></li>
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul>
                            <li> <Link className="nav-link" to="/">Log in / create account </Link></li>
                            <li><Link className="nav-link" to="/">Online support </Link></li>
                            <li><Link className="nav-link" to="/">Footwear</Link></li>
                            <li> <Link className="nav-link" to="/"><u>Shipping to Denmark</u></Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="nav-brand">
                    <img src={koovslogo} alt="Koovs Logo"/>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <img src={koovsicon} height="23" alt="Koovs Search icon"/>
                    <div><Link className="nav-link" to="/">Account</Link></div>
                    <div><Link className="nav-link" to="/cart">Cart (0)</Link></div>
                </div>
            </div>
        </header>
    
    )
    }
}

export default Header;



