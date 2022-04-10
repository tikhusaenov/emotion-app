import {AppStyled} from "../speech-recognition-app.style"
import React, {useCallback, useEffect, useState} from "react"
import {IconsContainer, NoteStyled, PlayButton, SpeechContainer, SpeechMenu} from "./speech.style";
import {ButtonWrapper} from "../../main-banner/main-banner.style";

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
        <AppStyled>
            <SpeechMenu>
                <PlayButton onClick={() => setIsListening(prevState => !prevState)}>
                    Play/Stop
                </PlayButton>
            </SpeechMenu>
            <SpeechContainer isListening={isListening}>
                <NoteStyled>
                    {note}
                </NoteStyled>
                <IconsContainer>
                    {isListening ? <span>🎙️</span> : <span>🛑</span>}
                </IconsContainer>
            </SpeechContainer>
        </AppStyled>
    )
}

export default Speech
