import React from 'react'
import { Form } from 'react-bootstrap'

import { FormInput } from './css'

function MyInputText (props) {
  return (
    <FormInput>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.inputTyper}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        <Form.Text className="messageAleta">{props.alerta}</Form.Text>
      </Form.Group>
    </FormInput>
  )
}

export default MyInputText
