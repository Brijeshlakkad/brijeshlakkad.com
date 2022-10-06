import React from "react";
import Box from "../box/box";
import { FooterComponent } from "../footer/footer";
import { ResumeComponent } from "../resume/resume";

export function HomeComponent({ resume }) {
    return resume && <Box>
        <ResumeComponent resume={resume} />
        <FooterComponent />
    </Box>
}