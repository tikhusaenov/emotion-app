import styled from 'styled-components'

export const MainSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 50%);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`

export const MainImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
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
