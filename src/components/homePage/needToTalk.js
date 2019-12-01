import React, {Fragment} from 'react'
import { Segment, Button, Header, Menu, Label, Icon, Message } from 'semantic-ui-react'

const NeedToTalk = () => (
    <div>
        <Fragment>
        <Segment attached>
        <Header as='h2'>
            Do you need to talk?
        </Header>
        <Message visible>
            We have people online who you can talk to. They are registered
            with our program and they are here to help.
        </Message>
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
        </Fragment>
    </div>
)

export default NeedToTalk