import React from 'react';
import styled from 'styled-components/macro'; // might use later
import { AboutStyled } from '../styles/reusableStyles';
import Toggle from './Toggle';


import { AnimateSharedLayout } from 'framer-motion'
import { motion } from 'framer-motion';





const FaqSection = () => {
    return (
        <FaqStyled>

            <h2>Any Questions<span>FAQ</span></h2>

            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <motion.div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                                reprehenderit perferendis sunt magni dolores ratione.
                            </p>
                        </motion.div>
                    </div>
                </Toggle>


                <Toggle title="What Products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                            reprehenderit perferendis sunt magni dolores ratione.
                        </p>
                    </div>
                </Toggle>


                <Toggle title="Different Payment Methods">
                    <div className="answer" layout>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                            reprehenderit perferendis sunt magni dolores ratione.
                        </p>
                    </div>
                </Toggle>



                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                            reprehenderit perferendis sunt magni dolores ratione.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout >




        </FaqStyled >
    )
}


const FaqStyled = styled(AboutStyled)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

 

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 0rem 0rem;
      font-size: 1.1rem;
    }
  }
`;



export default FaqSection
