import React from 'react'
import { Container, Section } from '../../component.style'
import {
    FeatureColumn,
    FeatureImageWrapper,
    FeatureName,
    FeatureText,
    FeatureTextWrapper,
    FeatureTitle,
    FeatureWrapper,
} from './features.style'
import { featuresData } from '../../data/features-data'

const Features = () => {
    const initial = {
        y: 40,
        opacity: 0,
    }
    const animate = {
        y: 0,
        opacity: 1,
    }

    return (
        <Section smPadding="50px 10px" position="relative" inverse id="about">
            <Container>
                <FeatureTextWrapper>
                    <FeatureTitle>Our features</FeatureTitle>
                </FeatureTextWrapper>
                <FeatureWrapper>
                    {featuresData.map((el, index) => (
                        <FeatureColumn
                            initial={initial}
                            animate={animate}
                            transition={{ duration: 0.5 + index * 0.1 }}
                            key={index}
                        >
                            <FeatureImageWrapper className={el.imgClass}>
                                {el.icon}
                            </FeatureImageWrapper>
                            <FeatureName>{el.name}</FeatureName>
                            <FeatureText>{el.description}</FeatureText>
                        </FeatureColumn>
                    ))}
                </FeatureWrapper>
            </Container>
        </Section>
    )
}

export default Features
