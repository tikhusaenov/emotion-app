import styled from 'styled-components'

export const CameraWrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`

export const CameraContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
`

export const CameraCanvasContainer = styled.div`
  position: relative;
  background: #b0b0b0;
  display: block;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  margin: 13px;
  
  video {
    height: 100%;
    display: block;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  
`

export const ResultsContainer = styled.div`
  background-color: #fff;
  width: 500px;
  margin: 20px auto;
  border: 1px solid green;
  border-radius: 15px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 5px 8px 0 rgba(34, 60, 80, 0.2);
`

export const CameraButtonsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: lighter;
`

export const CameraClosedWrapper = styled.div`
  color: grey;
  border: 1px solid black;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 1px 5px 8px 0 rgba(34, 60, 80, 0.2);

  &:hover {
    background: #cbcbcb;
  }
`

export const CameraButtonStyled = styled.button`
    margin: 5px;
    background: none;
    border: none;
    cursor: pointer;
`

