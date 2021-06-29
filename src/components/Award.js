import React from 'react';
import styled from 'styled-components/macro';

const Award = ({ awardsData }) => {
    return (
        <AwardStyled>
            <h3>{awardsData.title}</h3>
            <div className="line"></div>
            <p>{awardsData.description}</p>
        </AwardStyled>
    )
}


const AwardStyled = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }

    .line{
        width: 100%;
        background: #23d597;
        height: 0.3rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
        font-weight: lighter;
    }
`;




export default Award
