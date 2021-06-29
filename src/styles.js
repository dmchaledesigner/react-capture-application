import styled from "styled-components/macro";


// universal styled Components - we use export as normal functions to import into other JSX components
export const AboutStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;

        h2{
            color: white;
        }
`;


export const DescriptionStyled = styled.div`
    flex: 1;
    padding-right: 5rem;

        h2{
            font-weight: lighter;
        }
`;


export const HideStyled = styled.div`
    overflow: hidden;
`;


export const ImageStyled = styled.div`
        flex: 1;
        overflow:hidden;

            img{
                width: 100%;
                height: 80vh;
                object-fit: cover;
            }
`;