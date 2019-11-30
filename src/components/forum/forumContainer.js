import React from 'react';
import {
    Grid,
    Image,
    Segment,
} from 'semantic-ui-react';

import Post from './post';

const ForumContainer = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={4}>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={3}>
            <Segment>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
            <Segment>
                <Grid.Row>
                    <Post/>
                </Grid.Row>
                <Grid.Row>
                </Grid.Row>
            </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ForumContainer;