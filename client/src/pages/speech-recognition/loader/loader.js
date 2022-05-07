import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Spinner = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FontAwesomeIcon icon="spinner" spin size="4x" />
        </div>
    );
};

export default Spinner;
