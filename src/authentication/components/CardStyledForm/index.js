import React from 'react'
import Card from 'react-bootstrap/Card'

export function CardStyledForm ({ form, headerText, footerText, redirectRoute = null }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {headerText}
        </Card.Title>
        <Card.Text as='div'>
          {form}
        </Card.Text>
        <Card.Link href={redirectRoute}>{footerText}</Card.Link>
      </Card.Body>
    </Card>
  )
}
