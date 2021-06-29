import React from 'react';

import styled from "styled-components/macro";
import { AboutStyled } from '../styles';

const FaqSection = () => {
    return (
        <FaqStyled>
            <h2>Any questions <span>FAQ</span></h2>

            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>That below sullen despair not things dear things but from, agen uncouth him the.</p>
                </div>
            </div>


            <div className="faq-line"></div>


            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Not night her he wins knew nor of, calm counsel.</p>
                    <p>
                        To the that childe he none. Could she said in for mood, was cheer he childe it. Men whose dwelt.
                    </p>
                </div>
            </div>

            <div className="faq-line"></div>

            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    Though from departed waste satiety he harolds grief many and for, maidens a muse harold.
                </div>
            </div>

            <div className="faq-line"></div>

            <div className="question">
                <h4>Diferrent Payment Methods</h4>
                <div className="answer">
                    <p>Though there friends night ear friend a once satiety come care. To scarce and ever revel and moths that. Could.</p>
                    <p>
                        Flee of passed still sighed ever. And one these oh vaunted flee ere dwelt, all and a to a, grace.
                    </p>
                </div>
            </div>


            <div className="faq-line"></div>

            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Men will pomp to him save to, so hope name a he wassailers virtues.</p>
                    <p>
                        Aught muse cared consecrate feere his there sight. Whose through from if lone from.
                    </p>
                </div>
            </div>

            <div className="faq-line"></div>






        </FaqStyled>
    )
};



const FaqStyled = styled(AboutStyled)`
  display: block;

    span{
        display: inline-block;
    }

    h2{
        font-weight: lighter;
        padding-bottom: 3rem;
        font-size: 3rem;
    }

    .faq-line{
        width: 100%;
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
    }

    .question{
        padding: 3rem 0rem 0rem;
        cursor: pointer;

    }

    .answer{
        padding: 2rem 0;
        color: #ccc;

            p{
                font-size: 1rem;
                padding: 1rem 0rem;
                color: #ccc;
                padding: 0;
            }
    }
`

export default FaqSection
