import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    meta: 'Posted 10 minutes ago',
    header: 'How do I register to the Accessibility Centre?',
    description:
      'I\'ve not been doing the best in class and I\'ve been feeling...',
  },
  {
    meta: 'Posted two hours ago',
    header: 'When should I think I am overreacting?',
    description:
      'How do I know if what I\'m feeling is simply an overreaction or...',
  },
  {
    meta: 'Posted yesterday',
    header: 'Help, I don\'t know if I need a doctor or not.',
    description:
      'I have some stress symptoms that will not go away even if I am not in a stressful situation...',
  },
  {
    meta: 'Posted 10 minutes ago',
    header: 'How do I register to the Accessibility Centre?',
    description:
      'I\'ve not been doing the best in class and I\'ve been feeling...',
  },
  {
    meta: 'Posted two hours ago',
    header: 'When should I think I am overreacting?',
    description:
      'How do I know if what I\'m feeling is simply an overreaction or...',
  },
  {
    meta: 'Posted yesterday',
    header: 'Help, I don\'t know if I need a doctor or not.',
    description:
      'I have some stress symptoms that will not go away even if I am not in a stressful situation...',
  },
]

const Previews = () => <Card.Group items={items} />

export default Previews;