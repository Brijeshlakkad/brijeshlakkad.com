import React from "react";
import styled from "styled-components";
import { TextSecondary } from "../../css/colors";
import { parseDate } from "../../lib/date-util";
import Box from "../box/box";

const Summary = styled(Box)`
    font-size: 1rem;
    font-weight: bold;
    color: ${TextSecondary};
`

function Education({ area, startDate, endDate, institution, studyType, gpa, summary }) {
    return (
        <Box>
            <h3>{`${studyType}, ${area} - ${institution}`}</h3>
            <Summary>
                <Box>{`${parseDate(startDate)} - ${parseDate(endDate)}`}</Box>
                <Box><span>GPA: {gpa}</span></Box>
                {
                    summary && <Box><span>{summary}</span></Box>
                }
            </Summary>
        </Box>
    )
}
export function EducationComponent({ education }) {
    return (
        <Box id="education">
            <h2><i className="fa fa-graduation-cap left"></i> EDUCATION</h2>
            {
                education.map((educationItem, index) => {
                    return <Education key={`education-${index}`} {...educationItem} />
                })
            }
        </Box>
    )
}