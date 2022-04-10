import styled from 'styled-components'

export const CameraWrapper = styled.div`
    width: 50%;
`

export const CameraContainer = styled.div`
    display: flex;
    border: 1px solid black;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const CameraCanvasContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 680px;
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
