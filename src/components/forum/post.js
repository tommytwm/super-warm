import React from 'react';
import { 
    Container,
    Header,
    Divider,
    Label,
    Icon,
    Button
} from 'semantic-ui-react';

const Post = () => (
    <div>
        <Container text>
            <Label color='blue'>
                <Icon name='user outline' />
                Anonymous
                <Label.Detail>posted a while ago</Label.Detail>
            </Label>
            <Header as='h2'>
                How do I register to the Accessibility Centre?
            </Header>
            <Divider/>
            <p>
                I've not been doing the best in class and I've been feeling
                a lot of anxiety lately. I was wondering if it was possible
                to register with the Accessibility Centre to have myself
                accommodated?
            </p>
            <p>
                It's safe to say that these symptoms have been bothering
                me on a daily basis, and I think I need help.
            </p>
            <Label>
                Views
                <Label.Detail>50</Label.Detail>
            </Label>
            <Button size='mini' floated='right' as='div' labelPosition='right'>
            <Button size='mini' color='green'>
                <Icon name='thumbs up' />
                Like
            </Button>
            <Label as='a' basic color='green' pointing='left'>
                14
            </Label>
            </Button>
        </Container>
    </div>
);

export default Post;