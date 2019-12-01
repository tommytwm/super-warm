import React from 'react';
import {
    Grid,
    Segment,
    Divider,
} from 'semantic-ui-react';

import Post from './post';
import Comments from './comments';
import Previews from './previews';
import PostModal from './postModal';

const ForumContainer = () => (
    <Grid>
        <Grid.Row columns={4}>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={3}>
            <Segment>
                <Grid.Row>
                    <PostModal/>
                    <Divider/>
                </Grid.Row>
                <Grid.Row>
                    <Previews/>
                </Grid.Row>
            </Segment>
        </Grid.Column>
        <Grid.Column width={8}>
            <Segment>
                <Post/>
                <Comments/>
            </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ForumContainer;