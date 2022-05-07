import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../loader/loader'

import { mapExpressionToEmoji } from '../helpers/emojis'
import {
    FontAwesomeIconStyled,
    ResultsDescription,
    ResultsEmojiContainer,
    ResultsInfoContainer,
    ResultsWrapper
} from "./results.style";


const Results = ({ results, processing }) => {
    if (processing && results) {
        return <Spinner />
    }
    if (!processing && results && results.length > 0) {
        return (
            <ResultsWrapper>
                    {results.length > 1 ? (
                        <div>
                            {results.map((result, i) => (
                                <div className="results__wrapper" key={i}>
                                    <div style={{ width: '300px' }}>
                                        <p>
                                            One of you is probably {result.gender}, is looking {result.expressions.asSortedArray()[0].expression} and looks around{' '}
                                            {Math.round(result.age)}
                                        </p>
                                    </div>
                                    <FontAwesomeIcon icon={mapExpressionToEmoji(result.expressions.asSortedArray()[0].expression)} size="4x" />
                                    {/*<FontAwesomeIcon icon={mapExpressionToEmoji(result.gender)} size="4x" />*/}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <ResultsInfoContainer>
                            <ResultsEmojiContainer>
                                <FontAwesomeIcon
                                    icon={mapExpressionToEmoji(results[0].expressions.asSortedArray()[0].expression)}
                                    size="4x"
                                    color={'#071c2f'}
                                />
                            </ResultsEmojiContainer>
                            <ResultsDescription>
                                <p>You look {results[0].expressions.asSortedArray()[0].expression}</p>
                                {/*<p>Age: {Math.round(results[0].age)} years old</p>*/}
                                <p>Gender: {results[0].gender}</p>
                            </ResultsDescription>
                        </ResultsInfoContainer>
                    )}
            </ResultsWrapper>
        )
    } else {
        return (
            <div className="results">
                <Spinner />
            </div>
        );
    }
};

export default Results;
