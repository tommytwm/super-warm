import React from 'react';
import {
} from 'semantic-ui-react';

import ForumContainer from '../components/forum/forumContainer';
import ForumHeader from '../components/forum/forumHeader';

const Advice = () => (
    <div> 
        <ForumHeader/>
        <ForumContainer/>
    </div>
);

export default Advice;