import React, { Component } from 'react'
import { Button, Modal, Icon, Form, Checkbox } from 'semantic-ui-react'

class PostModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button
            fluid icon labelPosition='left' 
            onClick={this.show('inverted')}
            >
            <Icon name='plus'/>
            Add a post
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Ask something!</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Form>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' />
                </Form.Field>
                <Form.TextArea label='Body' placeholder='What is on your mind?...'/>
                <Form.Field>
                    <Checkbox label='Submit anonymously' />
                </Form.Field>
            </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
                icon='close'
                labelPosition='right'
                content="I changed my mind"
                onClick={this.close}
                />
            <Button
                type='submit'
                positive
                icon='checkmark'
                labelPosition='right'
                content="Yes, please"
                onClick={this.close}
                />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default PostModal;
