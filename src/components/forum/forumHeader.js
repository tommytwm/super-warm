import React from 'react';
import {
    Header,
    Icon,
} from 'semantic-ui-react';


const ForumHeader = () => (
    <Header as='h1'>
        <Icon name='question circle outline' />
        <Header.Content>
        Advice Column
        <Header.Subheader>Get some quick advice on some quick questions</Header.Subheader>
        </Header.Content>
    </Header>
);

export default ForumHeader;