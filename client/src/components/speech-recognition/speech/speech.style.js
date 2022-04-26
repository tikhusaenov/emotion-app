import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SpeechRecognitionBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  width: 100%;
`
export const SpeechMenu = styled.div`
  height: 80px;
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SpeechContainer = styled.div`
    height: 80%;
    border: ${({isListening}) => (isListening ? '1px solid green' : '1px solid red')};
    padding: 40px;
    background: #f1f1f1;
    margin: 20px;
    border-radius: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
  box-shadow: 1px 5px 8px 0 rgba(34, 60, 80, 0.2);

`

export const NoteStyled = styled.div`
    font-size: 20px;
    height: 100%;
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
    display: flex;
    justify-content: center;
`

export const PlayIconWrapper = styled.button`
    border: 1px solid black;
    padding: 20px;
    border-radius: 30%;
    background: #071c2f;
    cursor: pointer;
    &:hover {
      background: black;
    }
`

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
`
