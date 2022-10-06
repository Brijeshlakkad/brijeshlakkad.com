import React from "react";
import Box from "../box/box";

function Skills({ name, keywords }) {
    return (
        <Box>
            <h3 className="skills">{name}</h3>
            {
                keywords.map((keyword, index) => {
                    return <span className="keywords" key={`index-${index}`}>{keyword}</span>
                })
            }
        </Box>
    )
}

export function SkillsComponent({ skills }) {
    return (
        <Box id="skills">
            <h2><i className="fa fa-tasks left"></i>SKILLS</h2>
            {
                skills.map((skill, index) => {
                    return <Skills key={`skill-${index}`} {...skill} />
                })
            }
        </Box>
    )
}