import React from 'react';
import FeelingsButtom from '../components/homePage/feeling'
import NeedToTalk from '../components/homePage/needToTalk'
import Resources from '../components/homePage/resources'
import { Grid, Divider } from 'semantic-ui-react'

const Home = () => (
<div>
    <Grid>
        <Grid.Row columns = {4}>
        <Grid.Column width={3}>
        </Grid.Column>

        <Grid.Column width = {8}>
            <Grid.Row>
                <FeelingsButtom/>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
                <NeedToTalk/>
            </Grid.Row>
        </Grid.Column>
        <Grid.Column width = {3}>
            <Resources/>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
        </Grid.Row>
        

    </Grid>
</div>


);

export default Home;