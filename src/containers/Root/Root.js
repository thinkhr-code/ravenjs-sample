import React from 'react';
import { ThemeProvider } from 'styled-components';
import { generateTheme } from 'ravenjs/lib';
import { BrowserRouter } from 'react-router-dom';

import APP_THEME from '../../constants/theme';
import AppHeader from '../../components/AppHeader';
import Wrapper from '../../components/Wrapper';

import Routes from '../Routes';

const NAV_ITEMS = [
    {
        to   : '/',
        label: 'Home'
    },
    {
        to   : '/list-view',
        label: 'List View'
    }
];

function Root(props) {
    return (
        <BrowserRouter>
            <ThemeProvider theme={generateTheme(APP_THEME)}>
                <Wrapper>
                    <AppHeader navItems={NAV_ITEMS} />
                    <Routes />
                </Wrapper>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default Root;
