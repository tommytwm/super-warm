import React from 'react'
import { Grid, Segment, Button, Header } from 'semantic-ui-react'

const FeelingsButton = () => (
<div>
<Header as='h2' attached='top'>
    How do you feel?
</Header>
<Segment attached>
<Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>
            <Button>Stressed</Button>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
            <Button>Anxious</Button>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
            <Button>Sad</Button>
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>
            <Button>Overwhelmed</Button>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
            <Button>Lost</Button>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>
</div>
)

export default FeelingsButton
