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
  width: 100%;
  border: 1px solid black;
  padding-top: 1rem;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`


