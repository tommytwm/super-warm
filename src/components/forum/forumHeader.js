import React from 'react';
import {
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react';


const ForumHeader = () => (
    <Segment>
        <Header as='h1'>
            <Icon name='question circle outline' />
            <Header.Content>
            Advice Column
            <Header.Subheader>Get some quick advice on some quick questions</Header.Subheader>
            </Header.Content>
        </Header>
    </Segment>
);

export default ForumHeader;