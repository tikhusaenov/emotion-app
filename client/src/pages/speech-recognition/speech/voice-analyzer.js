import React from 'react'
import {VoiceAnalyzerStyled} from "./voice-analyzer.style"

const VoiceAnalyzer = ({ sentimentScore }) => {
    return (
        <VoiceAnalyzerStyled>
            <p>Emotion is
                {
                    sentimentScore ?
                        sentimentScore.score === 0 ?
                            " \"Neutral\""
                            :
                            sentimentScore.score > 0 ?
                                " \"Happy\""
                                :
                                sentimentScore.score === -3 ?
                                    " \"Angry\""
                                    :
                                    " \"Sad\""
                        : ''
                }
            </p>

        </VoiceAnalyzerStyled>
    )
}

export default VoiceAnalyzer
