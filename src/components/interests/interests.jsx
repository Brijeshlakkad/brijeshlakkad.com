import React from "react";
import Box from "../box/box";

export function InterestsComponent({ interests }) {
    return (
        <Box id="interests">
            <h2><i className="fa fa-star left"></i> INTERESTS</h2>
            {
                interests.map((interest, index) => {
                    return <h3 className="skills" key={`interest-${index}`}>{interest.name}</h3>
                })
            }
        </Box>
    )
}