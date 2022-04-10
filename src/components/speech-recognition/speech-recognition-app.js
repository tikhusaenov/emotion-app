import React, {useEffect, useRef, useState} from 'react'
import Camera from './camera/camera'
import Speech from "./speech/speech"
import {AppContainer, Heading, SpeechRecognitionAppContainer} from "./speech-recognition-app.style"
import Results from "./results/results";
import {ResultsContainer} from "./camera/camera.style";
import {detectFaces, drawResults} from "./helpers/faceApi";

const SpeechRecognitionApp = () => {
    const [results, setResults] = useState([])
    const camera = useRef()
    const cameraCanvas = useRef()
    const clearOverlay = (canvas) => {
        canvas.current.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    }

    const getFaces = async () => {
        if (camera.current !== null) {
            const faces = await detectFaces(camera.current.video)
            await drawResults(camera.current.video, cameraCanvas.current, faces, 'boxLandmarks')
            setResults(faces)
        }
    };
    useEffect(() => {
        if (camera !== null) {
            const ticking = setInterval(async () => {
                await getFaces()
            }, 80)
            return () => {
                clearOverlay(cameraCanvas)
                clearInterval(ticking)
            }
        } else {
            return clearOverlay(cameraCanvas)
        }
    }, [])

    return (
        <AppContainer>
            <Heading>Push play button and start speaking</Heading>
            <SpeechRecognitionAppContainer>
                <Speech />
                <Camera
                    camera={camera}
                    cameraCanvas={cameraCanvas}
                />
            </SpeechRecognitionAppContainer>
            <ResultsContainer>
                <Results results={results} />
            </ResultsContainer>
        </AppContainer>
    )
}

export default SpeechRecognitionApp
