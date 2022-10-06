import React from "react";
import { parseDate } from "../../lib/date-util";
import Box from "../box/box";

function Education({ area, startDate, endDate, institution, studyType, gpa }) {
    return (
        <Box>
            <h3>{`${studyType}, ${area} - ${institution}`}</h3>
            <h4>{`${parseDate(startDate)} - ${parseDate(endDate)}`}<br />
                <span>GPA: {gpa}</span>
            </h4>
        </Box>
    )
}
export function EducationComponent({ education }) {
    return (
        <Box id="education">
            <h2><i className="fa fa-graduation-cap left"></i>EDUCATION</h2>
            {
                education.map((educationItem, index) => {
                    return <Education key={`education-${index}`} {...educationItem} />
                })
            }
        </Box>
    )
}