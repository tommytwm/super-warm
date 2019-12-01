import React from 'react';
import {
    Grid,
    Segment,
    Button,
    Icon,
    Divider,
} from 'semantic-ui-react';

import Post from './post';
import Comments from './comments';
import Previews from './previews';

const ForumContainer = () => (
    <Grid>
        <Grid.Row columns={4}>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={3}>
            <Segment>
                <Grid.Row>
                    <Button fluid icon labelPosition='left'>
                        <Icon name='plus' />
                        Add a post
                    </Button>
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