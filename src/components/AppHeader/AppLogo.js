import PropTypes from 'prop-types';
import React from 'react';
import styled, { withTheme } from 'styled-components';

const AppLogoStyled = styled.div`
    margin-right: 10px;
    max-height: 50px;
    max-width: 150px;
    img {
        max-width: 100%;
        max-height: 50px;
    }
`;

function AppLogo({ theme }) {
    const { AppLogo: logoProps } = theme;
    const logoURL = logoProps.theme === 'light' ? logoProps.lightURL : logoProps.darkURL;
    const logoAlt = logoProps.alt;

    return (
        <AppLogoStyled>
            <img src={logoURL} alt={logoAlt} />
        </AppLogoStyled>
    );
}

AppLogo.propTypes = {
    theme: PropTypes.object.isRequired
};

export default withTheme(AppLogo);
