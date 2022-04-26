import React from 'react'
import {Content} from '../components/content/content'
import {contentOne} from '../data/content-data'
import NavbarApp from "../components/navbar/navbar-app"
import SpeechRecognitionApp from "../components/speech-recognition/speech-recognition-app"

const MainApp = () => (
    <>
        <NavbarApp/>
        <SpeechRecognitionApp />
        <Content {...contentOne} />
    </>
)

export default MainApp
