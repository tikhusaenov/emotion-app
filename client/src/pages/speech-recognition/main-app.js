import React from 'react'
import {Content} from '../landing-page/content/content'
import {contentOne} from '../../data/content-data'
import NavbarApp from "../landing-page/navbar/navbar-app"
import SpeechRecognitionApp from "./speech-recognition-app"

const MainApp = () => (
    <>
        <NavbarApp/>
        <SpeechRecognitionApp />
        <Content {...contentOne} />
    </>
)

export default MainApp
