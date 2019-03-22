import React from 'react';

import { Typography } from 'ravenjs/lib';
import { DataView } from 'ravenjs/components';

import schema from './ListViewSchema.json';

function ListView() {
    const sampleOAuthToken = 'sampleOAuthToken';

    return (
        <div>
            <Typography type="headline">List View</Typography>
            <DataView schema={schema} oAuthToken={sampleOAuthToken} />
        </div>
    );
}

export default ListView;
