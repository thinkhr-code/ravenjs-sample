import React from 'react';
import styled from 'styled-components';

import { Box } from 'ravenjs/lib';

const WrapperStyled = styled(Box)`
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;
    width: 100%;
`;

function Wrapper(props) {
    return (
        <WrapperStyled
            backgroundColor="transparent"
            borderRadius="0"
            borderWidth="0"
            margin="0"
            padding="0"
            position="relative"
            {...props}
        />
    );
}

export default Wrapper;
