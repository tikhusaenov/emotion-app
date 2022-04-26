import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../loader/loader'

import { mapExpressionToEmoji } from '../helpers/emojis'
import {ResultsContainer} from "../camera/camera.style";
import {ResultsEmojiContainer, ResultsInfoContainer, ResultsWrapper} from "./results.style";

// import './Results.css';

const Results = ({ results, processing }) => {
    if (processing && results) {
        return <Spinner />;
    }
    if (!processing && results && results.length > 0) {
        return (
            <ResultsWrapper>
                    {results.length > 1 ? (
                        <div>
                            <p>I think...</p>
                            {results.map((result, i) => (
                                <div className="results__wrapper" key={i}>
                                    <div style={{ width: '300px' }}>
                                        <p>
                                            One of you is probably {result.gender}, is looking {result.expressions.asSortedArray()[0].expression} and looks around{' '}
                                            {Math.round(result.age)}
                                        </p>
                                    </div>
                                    <FontAwesomeIcon icon={mapExpressionToEmoji(result.expressions.asSortedArray()[0].expression)} size="4x" />
                                    <FontAwesomeIcon icon={mapExpressionToEmoji(result.gender)} size="4x" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <ResultsInfoContainer>
                            <div>
                                <p>You look {results[0].expressions.asSortedArray()[0].expression}</p>
                                <p>You seem to be {Math.round(results[0].age)} years old</p>
                                <p>I think you are a {results[0].gender}</p>
                            </div>
                            <ResultsEmojiContainer>
                                    <FontAwesomeIcon icon={mapExpressionToEmoji(results[0].expressions.asSortedArray()[0].expression)} size="6x" />
                                    {/*<FontAwesomeIcon icon={mapExpressionToEmoji(results[0].gender)} size="4x" />*/}
                            </ResultsEmojiContainer>
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
