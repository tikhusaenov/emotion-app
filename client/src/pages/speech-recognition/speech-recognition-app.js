import React, {useEffect, useRef, useState} from 'react'
import Camera from './camera/camera'
import Speech from "./speech/speech"
import {AppContainer, Heading, SpeechRecognitionAppContainer} from "./speech-recognition-app.style"
import Results from "./results/results";
import {ResultsContainer} from "./camera/camera.style";
import {detectFaces, drawResults} from "./helpers/faceApi";
import DataTest from "./data-test/data-test";

const SpeechRecognitionApp = () => {
    const [results, setResults] = useState([])
    const camera = useRef()
    const cameraCanvas = useRef()

    const getFaces = async () => {
        try {
            if (camera.current !== null) {
                const faces = await detectFaces(camera.current.video)
                await drawResults(camera.current.video, cameraCanvas.current, faces, 'boxLandmarks')
                setResults(faces)
            }
        } catch (err) {
            return new Error(err)
        }
    }
    useEffect(() => {
        if (camera !== null) {
            const ticking = setInterval(async () => {
                await getFaces()
            }, 80)
            return () => {
                clearInterval(ticking)
            }
        }
    }, [camera.current, cameraCanvas.current])

    return (
        <AppContainer>
            <Heading>Push record button and start speaking :)</Heading>
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
            {/*<DataTest />*/}
        </AppContainer>
    )
}

export default SpeechRecognitionApp
