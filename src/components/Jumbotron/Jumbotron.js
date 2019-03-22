import PropTypes from 'prop-types';
import React from 'react';

import { Box, Divider, Typography } from 'ravenjs/lib';

function Jumbotron(props) {
    const { children, subTitle, title } = props;

    return (
        <Box backgroundColor="#F9FAFC" elevation={3} padding="40px 30px">
            <Typography type="display2">{title}</Typography>
            <Typography>{subTitle}</Typography>
            {children && <Divider />}
            {children}
        </Box>
    );
}

Jumbotron.propTypes = {
    children: PropTypes.node,
    subTitle: PropTypes.string,
    title   : PropTypes.string
};

Jumbotron.defaultProps = {
    children: null,
    subTitle: null,
    title   : null
};

export default Jumbotron;
