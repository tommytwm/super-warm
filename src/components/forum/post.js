import React from 'react';
import { 
    Container,
    Header,
    Divider,
} from 'semantic-ui-react';

const Post = () => (
    <div>
        <Container text>
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
        </Container>
    </div>
);

export default Post;