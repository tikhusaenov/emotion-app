import styled from 'styled-components'

export const SpeechContainer = styled.div`
  height: 80%;
  border: ${({isListening}) => (isListening ? '1px solid green' : '1px solid red')};
  padding: 40px;
  background: #f1f1f1;
  position: relative;
`
export const SpeechMenu = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const NoteStyled = styled.div`
    font-size: 20px;
    min-height: 200px;
    color: black;
    font-weight: lighter;
`

export const PlayButton = styled.button`
  background: #071c2f;
  font-size: 20px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  width: 140px;
  height: 60px;
  border-radius: 15px;
  transition: 0.3s;
  margin-bottom: 10px;

  &:hover {
    background: #324150;
  }
`

export const IconsContainer = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50%;
`
