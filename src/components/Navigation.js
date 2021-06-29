import React from 'react';
import styled from "styled-components/macro";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <NavStyled>
            <h1 id="logo"><Link to="">Capture</Link></h1>

            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
            </ul>

        </NavStyled>
    )
}

const NavStyled = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem 10rem;
    align-items: center;
    background-color: #282828;

    #logo{
        font-family: 'Lobster', cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }


    a{
        color: #fff;
        text-decoration: none;
    }
            

    ul{
        display: flex;
        list-style: none;

        li{
            position: relative;
            padding-left: 7rem;
        }
    }



`;


export default Navigation;

