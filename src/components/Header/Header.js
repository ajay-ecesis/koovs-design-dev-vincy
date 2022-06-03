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
        
        this.toggleMainMenus=this.toggleMainMenus.bind(this);
        
        this.toggleSubClass=this.toggleSubClass.bind(this);
        
        
      }

      
        toggleMainMenus(e)
        {
            let viewportWidth = window.innerWidth;
            if(viewportWidth<767)
            {
                e.target.classList.toggle('open-main');
            }
           
        }
      
        toggleSubClass(e)
        {

            e.target.classList.toggle('open-sub');
            
            // let els = document.getElementsByClassName('nav-sub-menu open-sub');
            // if(els[0] == undefined){
            //  e.target.classList.toggle('open-sub');
            //  }
            //      else if(els[0].classList.length > 1){
            //       els[0].classList.remove('open-sub');
                 
            //       }else{
            //       e.target.classList.toggle('open-sub');
            //       }
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
                            <li className="nav-main-menu w-100" onClick={(e) =>this.toggleMainMenus(e)}>Men
                                <ul>
                                    <li> <Link className="nav-link" to="/view-all">View all</Link></li>
                                    <li> <Link className="nav-link" to="/new-arrivals">New arrivals</Link></li>
                                    <li className="nav-sub-menu" onClick={(e) =>this.toggleSubClass(e)}>Clothing
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
                        </ul>
                    </li>


                    <li className="main-menu">
                        <ul className="nav-menu">
                            <li className="nav-main-menu" onClick={(e) =>this.toggleMainMenus(e)}>Women
                                <ul>
                                    <li> <Link className="nav-link" to="/view-all">View all</Link></li>
                                    <li> <Link className="nav-link" to="/new-arrivals">New arrivals</Link></li>
                                    <li className="nav-sub-menu" onClick={(e) =>this.toggleSubClass(e)}>Clothing 
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
                        </ul>
                    </li>
                    <li className="main-menu">
                        <ul className="nav-menu">
                            <li className="nav-main-menu" onClick={(e) =>this.toggleMainMenus(e)}>Pre Loved
                                <ul>
                                    <li> <Link className="nav-link" to="/view-all">View all</Link></li>
                                    <li> <Link className="nav-link" to="/new-arrivals">New arrivals</Link></li>
                                    <li className="nav-sub-menu" onClick={(e) =>this.toggleSubClass(e)}>Clothing
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
                    <img src={koovsicon} height="23" alt="Koovs Search icon" className="d-none d-lg-block"/>
                    <div><Link className="nav-link d-none d-lg-block" to="/">Account</Link></div>
                    <div><Link className="nav-link" to="/cart">Cart (0)</Link></div>
                </div>
            </div>
        </header>
    
    )
    }
}

export default Header;



