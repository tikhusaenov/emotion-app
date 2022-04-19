import {AppStyled} from "../speech-recognition-app.style"
import React, {useCallback, useEffect, useState} from "react"
import {
    FontAwesomeIconStyled,
    IconsContainer,
    NoteStyled,
    PlayButton, PlayIconWrapper,
    SpeechContainer,
    SpeechMenu, SpeechRecognitionBlock
} from "./speech.style";
import {ButtonWrapper} from "../../main-banner/main-banner.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'ru-RU'
// mic.lang = 'en-US'

const Speech = () => {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = useCallback(() => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }, [isListening])

    return (
        <SpeechRecognitionBlock>
            <SpeechMenu>
                <PlayIconWrapper onClick={() => setIsListening(prevState => !prevState)}>
                    {!isListening
                        ?
                            <FontAwesomeIconStyled icon='play' size="2x" color={"#ffffff"} />
                        :
                            <FontAwesomeIconStyled icon='pause' size="2x" color={"#ffffff"}/>
                    }
                </PlayIconWrapper>
            </SpeechMenu>
            <SpeechContainer isListening={isListening}>
                <NoteStyled>
                    {note}
                </NoteStyled>
                <IconsContainer>
                    {isListening
                        ?
                            <FontAwesomeIconStyled icon='microphone' size="2x" color={"#8d8d8d"} />
                        :
                            <FontAwesomeIconStyled icon='stop' size="2x" color={"#ff3939"} />
                    }
                </IconsContainer>
            </SpeechContainer>
        </SpeechRecognitionBlock>
    )
}

export default Speech
