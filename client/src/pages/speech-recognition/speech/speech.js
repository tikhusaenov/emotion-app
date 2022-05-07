import React, {useEffect, useState} from "react"
import {
    ButtonStyled,
    ChoiceHeading,
    FontAwesomeIconStyled, FormStyled,
    IconsContainer, InputStyled, LabelStyled,
    NoteStyled,
    RecordHeading,
    RecordIconWrapper, ResultStyled,
    SpeechContainer,
    SpeechMenu, SpeechRecognitionBlock, SpeechRecognizerStyled, StopIconWrapper, VariantsBlock
} from "./speech.style"
import Recorder from "recorder-js/src"
import axios from "axios"
import Sentiment from 'sentiment'
import VoiceAnalyzer from "./voice-analyzer"
import ReactAudioPlayer from 'react-audio-player'

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()


mic.continuous = true
mic.interimResults = true
// mic.lang = 'ru-RU'
mic.lang = 'en-US'
let recorder
let audioContext

const Speech = (props) => {
    const sentiment = new Sentiment()
    const [sentimentScore, setSentimentScore] = useState(null)
    const [note, setNote] = useState('')
    const [isRecording, switchRecording] = useState(false)
    const [dataIsReceived, switchReceive] = useState(false)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [formResult, setFormResult] = useState(null)
    const [uploadedFileName, setUploadedFileName] = useState(null)
    const [file, setFile] = useState('')
    const hiddenFileInput = React.useRef(null)


    const handleClick = () => {
        hiddenFileInput.current.click()
    }

    const handleChangeInput = (event) => {
        const fileUploaded = event.target.files[0]
        console.log(fileUploaded)
        setUploadedFileName(fileUploaded.name)
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    const startRecord = () => {
        switchReceive(false)
        switchRecording(true)
        audioContext = new window.AudioContext()
        recorder = new Recorder(audioContext, {onAnalysed: data => {
                // here comes an array of sound attitude, may be visualized with canvas later
                //console.log(data)
            }})
        navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
            recorder.init(stream)
            recorder.start().then(() => {
                console.log("Recording has started")
            }).catch(err =>
                console.log("Initialization error:", err))
        })
            .catch(err =>
                console.log('Cannot get stream: ', err))
    }

    // const fetchData = async () => {
    //     setLoading(true)
    //     try {
    //         const { data: response } = await axios.get('/results')
    //         setResult(response)
    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }

    const stopRecord = () => {
        switchRecording(false)
        recorder.stop().then(({blob}) => {
            const fd = new FormData()
            const filename = 'result.wav'
            fd.append("file", blob, filename)
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            axios.post('/results', fd, config
            ).then(async res => {
                // switchReceive(true)
                setResult(res.data)
            }).catch(err => {
                if (err)
                    console.log(err)
            })
        })
    }

    useEffect(() => {
        setSentimentScore(sentiment.analyze(note))
    }, [note])

    useEffect(() => {
        handleListen()
    }, [isRecording])

    const handleListen = () => {
        if (isRecording) {
            mic.start()
            mic.onend = () => {
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
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    const handleForm = (event) => {
        let request = new XMLHttpRequest()
        request.open('POST','http://localhost:3000/results', true)
        request.send(new FormData(event.target))
        event.preventDefault()
        request.onload = function() {
            setFormResult(request.responseText)
        }
    }

    return (
        <SpeechRecognitionBlock>
            <SpeechMenu>
                <RecordIconWrapper
                    disabled={isRecording ? 'disabled' : void 0}
                    isListening={isRecording}
                    onClick={() => {
                        startRecord()
                    }}
                >
                    <FontAwesomeIconStyled icon='play' size="1x" color={"#ffffff"}/>
                    <RecordHeading>Record</RecordHeading>
                </RecordIconWrapper>
                <StopIconWrapper
                    disabled={isRecording ? void 0 : 'disabled'}
                    isListening={isRecording}
                    onClick={() => {
                        stopRecord()
                    }}
                >
                    <FontAwesomeIconStyled icon='pause' size="1x" color={"#ffffff"}/>
                    <RecordHeading>Stop</RecordHeading>
                </StopIconWrapper>
            </SpeechMenu>
            <VariantsBlock>
                <SpeechRecognizerStyled>
                    <SpeechContainer isListening={isRecording}>
                        <NoteStyled>
                            {note}
                        </NoteStyled>
                        <IconsContainer>
                            {isRecording
                                ?
                                <FontAwesomeIconStyled icon='microphone' size="1x" color={"#8d8d8d"}/>
                                :
                                <FontAwesomeIconStyled icon='stop' size="1x" color={"#ff3939"}/>
                            }
                        </IconsContainer>
                    </SpeechContainer>
                    <VoiceAnalyzer sentimentScore={sentimentScore}/>
                    { result }
                </SpeechRecognizerStyled>
                <ChoiceHeading>OR</ChoiceHeading>
                <FormStyled onSubmit={(e) => handleForm(e)} method="POST"
                            encType="multipart/form-data">
                    <ButtonStyled onClick={handleClick}>
                        Choose file
                    </ButtonStyled>
                    <InputStyled
                        onChange={event => handleChangeInput(event)}
                        ref={hiddenFileInput}
                        style={{display: 'none'}}
                        type="file"
                        name="file"
                    />
                    <p>{ uploadedFileName }</p>
                    <ReactAudioPlayer
                        src={uploadedFileName ? file : ''}
                        controls
                    />
                    <InputStyled type="submit" name='Upload' value='Upload'/>
                    <ResultStyled>Emotion is { formResult ? JSON.stringify(formResult) : '...'}</ResultStyled>
                </FormStyled>
            </VariantsBlock>
        </SpeechRecognitionBlock>
    )
}

export default Speech
