import React from 'react'
import { Card, Grid, Header, Segment } from 'semantic-ui-react'

const items = [
    {
      meta: 'Posted 10 minutes ago',
      header: 'Accessibility Center',
      description:
        'I\'ve not been doing the best in class and I\'ve been feeling...',
    },

  ]

const Resources = () => (
    <div>
    <Header as='h2' attached='top'>
        Resources
    </Header>
    <Segment attached>
        <Card.Group items={items} />
    </Segment>

    </div>
    



)

export default Resources