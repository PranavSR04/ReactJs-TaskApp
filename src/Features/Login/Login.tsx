import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = ({submit}:{submit:(e: React.FormEvent<HTMLFormElement>) => Promise<void>}) => {

    
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Label>
            Email: 
        </Form.Label>
        <Form.Control name='email' type='email'/>
        <Form.Label>
            Password: 
        </Form.Label>
        <Form.Control name='password' type='password'/>
        <Button type='submit'>Login</Button>
      </Form>
    </div>
  )
}

export default Login
