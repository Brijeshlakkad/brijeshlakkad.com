import React from "react";
import { parseDate } from "../../lib/date-util";
import Box from "../box/box";


function Experience({ company, highlights, position, startDate, endDate, summary, website }) {
    return <Box className="job">
        <h3>{`${position}, ${company}`}</h3>
        <h4>{`${parseDate(startDate)} - ${parseDate(endDate)}`}</h4>
        <p>{summary}</p>
        <h4>HIGHLIGHTS</h4>
        <ul>
            {
                highlights.map((highlight, index) => {
                    return <li key={`highlight-${index}`}>{highlight}</li>
                })
            }
        </ul>
    </Box>
}

export function WorkExperienceComponent({ work }) {
    return (
        <Box id="work">
            <h2><i className="fa fa-suitcase left"></i>PROFESSIONAL WORK EXPERIENCE</h2>
            {
                work.map((experience, index) => {
                    return <Experience key={`experience-${index}`} {...experience} />
                })
            }
        </Box>
    )
}