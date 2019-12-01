import React from 'react';
import FeelingsButtom from '../components/homePage/feeling'
import NeedToTalk from '../components/homePage/needToTalk'
import { Grid } from 'semantic-ui-react'

const Home = () => (
<div>
    <Grid>
        <Grid.Column width = {10}>
            <Grid.Row>
                <FeelingsButtom/>
            </Grid.Row>
            <Grid.Row>
                <NeedToTalk/>
            </Grid.Row>
        </Grid.Column>
        <Grid.Column width = {6}>

        </Grid.Column>

    </Grid>
</div>


);

export default Home;