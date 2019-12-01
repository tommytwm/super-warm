import React, { Fragment, Component } from 'react';
import { 
    Segment, 
    Button, 
    Header, 
    Menu, 
    Label, 
    Icon, 
    Message,
    Modal,
} from 'semantic-ui-react';
import Demo from './demo';

class NeedToTalk extends Component {
  state = { open: false, isOpen: true }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  isOpen = () => this.setState({ open: true })

  render() {
    const { open, dimmer } = this.state

    return (
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
                <Button 
                    onClick={this.show('inverted')}
                    >
                    <Icon name='user'/>
                    Talk to a peer
                </Button>
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

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Demo/>
          <Modal.Actions>
            <Button
                icon='close'
                labelPosition='right'
                onClick={this.close}
                />
          </Modal.Actions>
        </Modal>

        </Segment>
        </Fragment>
    </div>
        )
    }
}

export default NeedToTalk