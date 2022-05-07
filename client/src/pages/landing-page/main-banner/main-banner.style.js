import styled from 'styled-components'

export const MainSection = styled.section`
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainImage = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    background: linear-gradient(62deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    position: absolute;
    z-index: -1;
  @-webkit-keyframes gradient{
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  @keyframes gradient{
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  //object-fit: cover;
  //width: 100%;
  //height: 100%;
  //background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  //top: 0;
  //z-index: -1;
`

export const MainText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`
