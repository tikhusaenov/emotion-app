import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../component.style'
import { ButtonWrapper, MainImage, MainSection, MainText } from './main-banner.style'

const MainBanner = () => {
    return (
        <MainSection>
            <MainImage src="./assets/banner.jpg" alt="banner" />
            <Container>
                <MainHeading>What do you feel right now?</MainHeading>
                <MainText>
                    We can help you to understand your emotions
                </MainText>
                <ButtonWrapper>
                    <Link to="app">
                        <Button>Get Started</Button>
                    </Link>
                </ButtonWrapper>
            </Container>
        </MainSection>
    )
}

export default MainBanner
