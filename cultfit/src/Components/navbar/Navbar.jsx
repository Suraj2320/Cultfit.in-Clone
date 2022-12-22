import React, { useEffect,  useState } from "react";
import "./Navbar.scss";
import { Link,  useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login";
import { Logout } from "../../redux/auth/auth.action";


const Navbar = () => {
    const { isAuth, token } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const handleLoginClick=()=>{
    if(isAuth){
        console.log(isAuth)
        dispatch(Logout())
    }
    else{
        navigate("/")
    }
    
}

  return (
    <>
      <div  className="navbar" >
        <div className="navbar__logo">
          <Link to="/" className="navbar__links-link">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <Link
                to="/fitness" className="navbar__links-link" >
                fitness
              </Link>
            </li>
            <li>
              
              <Link
                to="/care"
                className="navbar__links-link">
                care
              </Link>
            </li>
            <li >
             
              <Link
                to="/mind"
                className="navbar__links-link" >
                mind
              </Link>
            </li>
            <li>
             
              <Link
                to="/store"
                className="navbar__links-link">
                store
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar__cart">
          <div className="navbar__cart-location">
            <div className="navbar__cart-location-name">
              <select name="location" id="navbar__cart-location-name-select">
                <option value="bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Ranchi">Ranchi</option>
              </select>
            </div>
            <div className="navbar__cart-location-img">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                alt="location"
              />
            </div>
          </div>
          <div className="navbar__cart-button">
            <button>GET APP</button>
          </div>
          <div onClick={handleLoginClick}
            className="navbar__cart-profile" >
            {
                isAuth?<RiLogoutCircleRLine/>: <Login/>
            }
          
          </div>

          <div className="navbar__cart-cart" >
            <img onClick={()=>navigate("/cart")}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
              alt="cart"
            />
          </div>
        </div>
        {/* <div className="login__popup">login</div>
        <div className="cart__popup">cart</div> */}
        
      </div>
      <div className="m-nav">
        <div className="m-nav__hamburgar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="m-nav__logo">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
            alt="m-logo"
          />
        </div>

        <div className="m-nav__location">
          <div className="navbar__cart-location">
            <div className="navbar__cart-location-name">
              <select name="location" id="navbar__cart-location-name-select">
                <option value="banglore">Banglore</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Ranchi">Ranchi</option>
              </select>
            </div>
            <div className="navbar__cart-location-img">
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                alt="location"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;