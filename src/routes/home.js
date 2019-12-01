import React from 'react';
import SelectBar from '../components/Selectbar/selectBar'
import FeelingsButtom from '../components/homePage/feeling'
import NeedToTalk from '../components/homePage/needToTalk'
import { Grid, GridColumn } from 'semantic-ui-react'


import NaviBar from '../components/navi/naviBar';

const Home = () => (
<div>
    <SelectBar/>
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