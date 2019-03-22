import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { darken } from 'polished';

import { Box, Col, Row } from 'ravenjs/lib';

import AppLogo from './AppLogo';

const navItemActiveClassName = 'nav-item-active';

const AppHeaderStyled = styled(Box)``;

const NavLink = styled(RouterNavLink).attrs({
    activeClassName: navItemActiveClassName,
    isActive       : props => {
        return function(match, location) {
            if (!match) {
                return false;
            }
            return Boolean(match.path.includes(location.pathname));
        };
    }
})`
    background-color: ${darken(0.2, '#E5E9F2')};
    border-radius: 3px;
    color: #fff;
    margin-right: 10px;
    padding: 7.5px 12px;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.create(['background-color', 'color'])};
    &:hover {
        background-color: #85d7ff;
    }
    &:last-child {
        margin-right: 0;
    }
    &.${navItemActiveClassName} {
        background-color: #009eeb;
    }
`;

function AppHeader(props) {
    const { navItems } = props;

    return (
        <AppHeaderStyled
            backgroundColor="#EFF2F7"
            padding="12px 15px"
            borderRadius="0"
            borderWidth="0"
            margin="0 0 25px 0"
            width="100%"
        >
            <Row alignItems="center" height="100%" gutter={false}>
                <Col padding="0 10px 0 0" size="auto">
                    <AppLogo />
                </Col>
                <Col>
                    {navItems.map(item => {
                        const { label, to } = item;

                        return (
                            <NavLink to={to} key={to}>
                                {label}
                            </NavLink>
                        );
                    })}
                </Col>
            </Row>
        </AppHeaderStyled>
    );
}

AppHeader.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            to   : PropTypes.string,
            label: PropTypes.string
        })
    ).isRequired
};

export default AppHeader;
