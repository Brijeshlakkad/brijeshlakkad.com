import React from "react";
import Box from "../box/box";

export function SummaryComponent({ summary }) {
    return (
        <Box id="about">
            <h2><i className="fa fa-user left"></i> ABOUT</h2>
            <p>{summary}</p>
        </Box>
    )
}