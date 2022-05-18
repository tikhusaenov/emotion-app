import React from 'react'
import {TextAnalyzerStyled} from "./voice-analyzer.style"
import {TagStyled} from "./speech.style"

const TextAnalyzer = ({ sentimentScore }) => {
    return (
        <TextAnalyzerStyled>
            <p>Emotion from <TagStyled>text</TagStyled> is
                {/*{` ${result}`}*/}
                {
                    sentimentScore ?
                        sentimentScore.score === 0 ?
                            <TagStyled> "Neutral"</TagStyled>
                            :
                            sentimentScore.score > 0 ?
                                <TagStyled> "Happy"</TagStyled>
                                :
                                sentimentScore.score === -3 ?
                                    <TagStyled> "Angry"</TagStyled>
                                    :
                                    <TagStyled> "Sad"</TagStyled>
                        : ''
                }
            </p>

        </TextAnalyzerStyled>
    )
}

export default TextAnalyzer
