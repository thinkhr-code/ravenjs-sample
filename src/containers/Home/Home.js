import React from 'react';

import { Button, Typography } from 'ravenjs/lib';

import Jumbotron from '../../components/Jumbotron';

function Home() {
    function handleBtnClick(e) {
        e.preventDefault();
        window.alert('You clicked on the button');
    }

    return (
        <div>
            <Jumbotron
                title="Hello World"
                subTitle="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
            >
                <Typography>
                    It uses the <strong>Typography</strong> component internally to display the
                    title and subtitle, and transpiles the children, if any.
                </Typography>
                <Button color="secondary" onClick={handleBtnClick}>
                    Sample Button
                </Button>
            </Jumbotron>
        </div>
    );
}

export default Home;
