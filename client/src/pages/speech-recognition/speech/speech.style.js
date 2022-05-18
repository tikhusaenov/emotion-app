import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SpeechRecognitionBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const VariantsBlock = styled.div`
  border: 1px solid grey;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 40px 0;
  background: #f3f3f3;
`

export const SpeechMenu = styled.div`
  height: 80px;
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
`

export const SpeechContainer = styled.div`
    width: 60%;
    border: ${({isListening}) => (isListening ? '1px solid green' : '1px solid red')};
    padding: 40px;
    height: 400px;
    background: white;
    border-radius: 15px;
    display: flex;
    margin: 20px 0 20px 0;
    flex-direction: column;
    justify-content: end;
    box-shadow: 1px 5px 8px 0 rgba(34, 60, 80, 0.2);

`

export const NoteStyled = styled.div`
    font-size: 20px;
    min-height: 290px;
    color: black;
    font-weight: lighter;
`

export const TransPlaceHolder = styled.p`
    opacity: 0.3;
`

export const ChoiceHeading = styled.h1`
  -webkit-text-fill-color: transparent; /* Will oveу rride color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  opacity: 0.4;
  -webkit-text-stroke-color: grey;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
`

export const RecordIconWrapper = styled.button`
    border: none;
    padding: 15px;
    border-radius: 15px;
    background: ${({isListening}) => (isListening ? 'grey' : '#111')};
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: ${({isListening}) => (isListening ? 'grey' : '#262d3a')};
    }
`

export const StopIconWrapper = styled.button`
    border: none; 
    padding: 15px;
    margin-left: 15px;
    border-radius: 15px;
    background: ${({isListening}) => (isListening ? 'red' : 'grey')};
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: ${({isListening}) => (isListening ? '#ff6969' : 'grey')}
    }
`

export const RecordHeading = styled.p`
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: lighter;
    color: white;
    margin-left: 10px;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const SpeechRecognizerStyled = styled.div`
    display: flex;
    width: 770px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
`

export const FormContainer = styled.div`
    width: 770px;
`

export const FormStyled = styled.form`
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    //max-width: 500px;
    padding: 30px 50px;
    height: 400px;
    width: 500px;
    
    border-radius: 15px;
`

export const ButtonStyled = styled.button`
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;
    width: 100%;
`
export const InputStyled = styled.input`
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;
    width: 100%;
`

export const LabelStyled = styled.label`
`
export const ResultStyled = styled.div`
    font-weight: lighter;
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
`

export const TextAndVoiceBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TagStyled = styled.span`
    font-weight: bold;
`
