import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton,  } from './ReservenowElements'


const Reservenow = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">NCJ</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Reserve Now</FormH1>
              <FormLabel htmlFor='for'>Your Name</FormLabel>
              <FormInput type='name' required/>
              <FormLabel htmlFor='for'>Pet Name</FormLabel>
              <FormInput type='petname' required/>
              <FormLabel htmlFor='for'>Pet Name</FormLabel>
              <FormInput type='petname' required/>
              <FormLabel htmlFor='for'>Pet Name</FormLabel>
              <FormInput type='petname' required/>
              <FormButton type='submit'>Reserve Now</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Reservenow
