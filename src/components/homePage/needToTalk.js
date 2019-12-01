import React from 'react'
import { Grid, Segment, Button, Header, Menu, Label, Icon } from 'semantic-ui-react'

const NeedToTalk = () => (
<div>
<Header as='h2' attached='top'>
    Do you need to talk?
</Header>
<Segment attached>
<Menu compact>
    <Menu.Item as='a'>
        <Button><Icon name='user' />Talk to peer</Button>
        <Label color='teal' floating>
            5
        </Label>
    </Menu.Item>
    <Menu.Item as='a'>
        <Button ><Icon name='doctor' />Talk to advisor</Button>
        <Label color='teal' floating>
        12
      </Label>
    </Menu.Item>
</Menu>

</Segment>
</div>
)

export default NeedToTalk