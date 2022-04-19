import React, {useState} from 'react';
import classnames from 'classnames';

import {loadModels} from '../helpers/faceApi'

import Webcam from 'react-webcam';

import './camera.css';
import {
    CameraCanvasContainer,
    CameraContainer,
    CameraIconButton,
    CameraWrapper,
    FontAwesomeIconStyledCamera
} from "./camera.style";
import {createFaLibrary} from "../helpers/icons";
import {FontAwesomeIconStyled} from "../speech/speech.style";
createFaLibrary()
loadModels()

const Camera = ({ camera, cameraCanvas }) => {
    const [open, setOpen] = useState(true)
    const [openCanvas, setOpenCanvas] = useState(false)

    const toggleWebcam = () => {
        setOpen((prevState) => !prevState)
    }
    const toggleCanvas = () => {
        setOpenCanvas((prevState) => !prevState)
    }
    return (
        <CameraWrapper>
            <CameraContainer>
                {/*<button onClick={() => toggleWebcam()}>Close/Open webcam</button>*/}
                {/*<button onClick={() => toggleCanvas()}>Close/Open face map</button>*/}
                {open &&
                    <CameraCanvasContainer>
                        <CameraIconButton onClick={() => console.log('fsdfsdf')}>
                            <FontAwesomeIconStyledCamera icon='video-slash' size="2x" color={"#4d4d4d"} />
                        </CameraIconButton>
                        <Webcam audio={false} ref={camera} width="100%" height="auto" />
                        {openCanvas && <canvas className={classnames('webcam-overlay')} ref={cameraCanvas} />}
                    </CameraCanvasContainer>
                }
            </CameraContainer>
        </CameraWrapper>
    );
};

export default Camera;
