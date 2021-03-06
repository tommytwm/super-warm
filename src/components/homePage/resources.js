import React from 'react'
import Map from '../homePage/map.png'
import { Card, Header, Segment } from 'semantic-ui-react'

const Resources = () => (
    <div>

    
    <Header as='h2' attached='top'>
        Resources
    </Header>
    <Segment attached>
    <Card.Group>
    <Card
    image={Map}
    header='Accessibility Center'
    meta='Student Services
    info.accessibility@ubc.ca'
    description='Brock Hall
    1874 East Mall
    Room 1203
    Vancouver, BC V6T 1Z1
    Canada'
    />
    <Card 
    header='Crisis Center'
    meta='www.youthinbc.com | www.crisiscentrechat.ca'
    description='604-872-3311'
    />
    <Card 
    header='24-hour WAVAW Crisis Line'
    meta='Woman Against Violence Against Woman'
    description='604-255-6344'
    />
    <Card 
    header='Campus Security'
    meta='Use any Blue Light Phones on campus'
    description='604.822.2222'
    />
    </Card.Group>

    </Segment>
    
</div>


)

export default Resources