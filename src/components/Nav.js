import React from "react";
import style from "styled-components";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";

const Nav = () => {
  const { total_item } = useCartContext();
  const [menuIcon, setMenuIcon] = React.useState();
  const [status, setStatus] = React.useState("home");
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const changingState = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    if (e.target.name) {
      setStatus(e.target.name);
    }
  };
  function change() {
    setStatus("cart");
  }

  return (
    <Wrapper>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists" onClick={changingState}>
          <li>
            <NavLink
              to="/"
              name="home"
              className={
                status === "home" ? "navbar-link is-active" : "navbar-link"
              }
            >
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              name="about"
              className={
                status === "about" ? "navbar-link is-active" : "navbar-link"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              name="products"
              className={
                status === "products" ? "navbar-link is-active" : "navbar-link"
              }
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              name="contact"
              className={
                status === "contact" ? "navbar-link is-active" : "navbar-link"
              }
            >
              CONTACT
            </NavLink>
          </li>

          {isAuthenticated && (
            <li>
              <p className="username">{user.nickname}</p>
            </li>
          )}

          {!isAuthenticated ? (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          ) : (
            <li>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            </li>
          )}
          <li></li>
        </ul>
        <NavLink
          onClick={change}
          to="/cart"
          className={
            status === "cart"
              ? "cart-trolley--link is-active"
              : "cart-trolley--link"
          }
        >
          <FiShoppingCart className="cart-trolley" />
          <span className="cart-total--item">{total_item}</span>
        </NavLink>

        {/* opening and closing menu two buttons */}

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = style.nav`

.navbar{
    height: 100%;
    display: flex;
    
    

    .navbar-lists{
        display: flex;
        gap: 3.3rem;
        align-items: center;

        .username{
            margin-top:0.6rem;
        }
        .navbar-link{
                display: inline-block;
                text-decoration: none;
                font-size: 1.2rem;
                font-weight: 700;
                text-transform: uppercase;
                color: black;
                transition: color 0.3s linear;
                

            &:hover{
                color: ${({ theme }) => theme.colors.helper};
            }
            
        }
        .is-active{
            color: ${({ theme }) => theme.colors.helper};
        }
    }
    .mobile-navbar-btn{
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }
    .mobile-nav-icon[name='close-outline']{
        display: none;
    }
    .close-outline{
        display: none;
    }
    
    .cart-trolley--link{
        position: relative;
        color:#3a3a3a;
        .cart-trolley{
            position: relative;
            font-size: 3.2rem;
            width: 2rem;
        }
            

        .cart-total--item{
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            color: #000;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top: -20%;
            left: 70%;
            background-color: ${({ theme }) => theme.colors.helper}
        }
    }
        .is-active{
            color: ${({ theme }) => theme.colors.helper};
        }

    .user-login--name{
        text-transform: capitalize;
    }

    .user-logout,
    .user-login{
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
    }
}


//  media query --------------

    @media(max-width:${({ theme }) => theme.media.mobile}){
    .mobile-navbar-btn{
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon{
            font-size: 4.2rem;
            color: ${({ theme }) => theme.colors.black}
        }
    }

    .active .mobile-nav-icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 5%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
    }

    .active .close-outline{
        display: inline-block;
    }

    .navbar-lists{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visiblity: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 3s linear;
    }

    .active .navbar-lists{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index:999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link{
            font-size: 4.2rem;
        }
    }
    .cart-trolley--link{
        position: relative;

        .cart-trolley{
            position: relative;
            font-size: 5.2rem;
        }

        .cart-total--item{
            width: 4.2rem;
            height: 4.2rem;
            font-size: 2rem;
        }
    }

    .user-logout,
    .user-login{
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
    }
}`;

export default Nav;
