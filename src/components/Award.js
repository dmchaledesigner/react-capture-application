import React from 'react';
import styled from 'styled-components/macro';


const Award = ({ award }) => {
    return (
        <AwardStyled>
            <h3>{award.title}</h3>
            <div className="line"></div>
            <p>{award.description}</p>
        </AwardStyled>
    )
}

const AwardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    h3{
        font-size: 1.6rem;
    }

    .line{
        width: 50%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
`;


export default Award
