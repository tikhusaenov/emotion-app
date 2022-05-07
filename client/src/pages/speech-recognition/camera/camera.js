import React, {useState} from 'react';
import classnames from 'classnames';

import {loadModels} from '../helpers/faceApi'

import Webcam from 'react-webcam';

import './camera.css';
import {
    CameraButtonsBlock,
    CameraButtonStyled,
    CameraCanvasContainer, CameraClosedWrapper,
    CameraContainer,
    CameraWrapper,
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
                <CameraButtonsBlock>
                    <CameraButtonStyled onClick={() => toggleWebcam()}>
                        {open ?
                            <FontAwesomeIconStyled icon='video-slash' size="2x" color={"#8a8a8a"}/>
                            : (
                                <CameraClosedWrapper>
                                    <p>Open camera</p>
                                    <FontAwesomeIconStyled icon='video' size="2x" color={"#8a8a8a"}/>
                                </CameraClosedWrapper>
                            )
                        }
                    </CameraButtonStyled>
                    {open &&
                        <CameraButtonStyled onClick={() => toggleCanvas()}>
                            <FontAwesomeIconStyled icon='map' size="2x" color={"#8a8a8a"}/>
                        </CameraButtonStyled>
                    }
                </CameraButtonsBlock>
                {open &&
                    <CameraCanvasContainer>
                        <Webcam audio={false} ref={camera} width="100%" height="auto" />
                        {openCanvas && <canvas className={classnames('webcam-overlay')} ref={cameraCanvas} />}
                    </CameraCanvasContainer>
                }
            </CameraContainer>
        </CameraWrapper>
    );
};

export default Camera;
