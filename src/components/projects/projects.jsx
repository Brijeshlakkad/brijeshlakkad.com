import React from "react";
import { parseDate } from "../../lib/date-util";
import Box from "../box/box";


function Project({ highlights, name, startDate, endDate, summary, description, link }) {
    return <Box className="job">
        <h3>{name}</h3>
        <h4>{`${parseDate(startDate)} - ${parseDate(endDate)}`}</h4>
        <p>{description}</p>
        <p>{summary}</p>
        <p>Open Source Code: <a className="link" href={link} target={"_blank"} rel="noreferrer">{link}</a></p>
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

export function ProjectComponent({ projects }) {
    return (
        <Box id="work">
            <h2><i class="fa fa-cloud left"></i> PERSONAL PROJECTS</h2>
            {
                projects.map((project, index) => {
                    return <Project key={`project-${index}`} {...project} />
                })
            }
        </Box>
    )
}