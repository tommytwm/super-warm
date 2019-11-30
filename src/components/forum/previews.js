import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    meta: 'Posted 10 minutes ago',
    header: 'How do I register to the Accessibility Centre?',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
  },
  {
    meta: 'Posted two hours ago',
    header: 'When should I think I am overreacting?',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
  },
  {
    meta: 'Posted yesterday',
    header: 'Help, I don\'t know if I need a doctor or not.',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
  },
]

const Previews = () => <Card.Group items={items} />

export default Previews;