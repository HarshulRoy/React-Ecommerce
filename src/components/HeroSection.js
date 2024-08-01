import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Button} from '../styles/Button'
import img from "../images/hero.jpg"
const HeroSection = ({myName}) => {
    const {name}=myName
  return (
    <Wrapper>
    <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to </p>
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            atque temporibus veniam dol.
          </p>
          <NavLink to="/about">
            <Button>show now</Button>
          </NavLink>
        </div>
        {/* our homepage image  */}
        <div className="hero-section-image">
          <figure>
            <img
              src={img}
              alt=""
              className="img-style"
            />
          </figure>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 26rem 4rem 26rem;
  height:100%;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    width:95%;
    position: relative;
    left:15%;
    p {
      margin: 2rem 0;
      font-size: 1.35rem;
      font-weight: 700;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 3.5rem;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 60%;
    min-width: 350px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection
