import React from "react";
import { AwardsComponent } from "../awards/awards";
import { BasicsComponent } from "../basics/basics";
import Box from "../box/box";
import { EducationComponent } from "../education/education";
import { InterestsComponent } from "../interests/interests";
import { SkillsComponent } from "../skills/skills";
import { SummaryComponent } from "../summary/summary";
import { WorkExperienceComponent } from '../work-experience/work-experience'

export function HomeComponent({ resume }) {
    return resume && (<React.Fragment>
        <BasicsComponent
            {...resume.basics}
        />
        <Box className="main">
            <SummaryComponent
                summary={resume.summary}
            />
            <WorkExperienceComponent
                work={resume.work}
            />
            <SkillsComponent
                skills={resume.skills}
            />
            <EducationComponent
                education={resume.education}
            />
            <AwardsComponent
                awards={resume.awards}
            />
            <InterestsComponent
                interests={resume.interests}
            />
        </Box>
    </React.Fragment>)
}