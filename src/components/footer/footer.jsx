import React from "react";
import styled from "styled-components";
import { UIPrimary } from "../../css/colors";
import Box from "../box/box";

const Container = styled(Box)`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${UIPrimary};
`

const SourceCode = styled(Box)`
    padding: 5px;
    font-size: 1.21rem;
`

const sourceCodeLink = "https://github.com/Brijeshlakkad/brijeshlakkad.com";

export function FooterComponent(props) {
    return (
        <Container>
            <Box>
                This website has been created using React@^18.2.0 and ReactRedux@^8.0.4
            </Box>
            <SourceCode>
                The Source code can be found at <a href={sourceCodeLink}>{sourceCodeLink}</a>
            </SourceCode>
        </Container>
    )
}