import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Header, Button, Card, Image, Placeholder } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
    header: 'I need some advice',
    description: 'Do you need to talk to someone?',
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    header: 'I feel stressed',
    description: 'Need to vent?',
  },
  {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
    header: 'I feel kind of depressed',
    description: 'That\'s fine, let\'s talk about it.',
  },
]

export default class FeelingsButton extends Component {
  state = { loading: false }

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <Fragment>
        <Header as='h1'>
          How are you feeling today?
        </Header>
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>

              <Card.Content extra>
                <Button 
                  as={ Link }
                  to='/advice'
                  fluid disabled={loading} primary>
                  Let's talk about it
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    )
  }
}
