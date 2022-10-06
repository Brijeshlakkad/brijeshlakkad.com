import React from "react";
import Box from "../box/box";

function Award({ title, date, link, summary }) {
    return (
        <Box>
            <h3>{title}</h3>
            <h4>{date}</h4>
            <p>{summary}</p>
            {link && <span>Link: <a href={link} target={"_blank"} rel="noreferrer">{link}</a></span>}
        </Box>
    )
}

export function AwardsComponent({ awards }) {
    return (
        <Box id="awards">
            <h2><i className="fa fa-trophy left"></i>AWARDS</h2>
            {
                awards.map((award, index) => {
                    return <Award key={`award-${index}`} {...award} />
                })
            }
        </Box>
    )
}