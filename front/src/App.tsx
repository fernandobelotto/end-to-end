import { Box, Button, Container, Heading, HStack, Text, Textarea, useToast, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { decrypt, encrypt } from './service'

export default function App() {

  const toast = useToast()

  const [messages, setMessage] = useState([])

  const [content, setContent] = useState('')

  function handleSendMessage() {

    axios.post('http://localhost:3001/', { content, sender: 'fer', receiver: 'gui'}).
      then(console.log)
      .catch(() => toast({
        title: 'Error',
        description: 'Could not send message',
        status: 'error',
      }))

  }

  function getMessage() {
    axios.get('http://localhost:3001/').
    then(response => setMessage(response.data))
    .catch(() => toast({
        title: 'Error',
        description: 'Could not fetch messages',
        status: 'error',
      }))
  }

  useEffect(() => {
    const ref = setInterval(getMessage, 3000)

    return () => {
      clearInterval(ref)
    }
  }, [])


  return (
    <Container>
      <VStack spacing={5}>

      <Heading>poc end to end</Heading>
      <Textarea value={content} onChange={(e)=>setContent(e.target.value)}></Textarea>
      <Button size='sm' onClick={handleSendMessage} >enviar</Button>
      <Heading>messages</Heading>

      <Heading>{encrypt(content)}</Heading>
      <Heading>{decrypt(encrypt(content))}</Heading>

      {/* {messages.map(message => <Text>{message?.content}</Text>)} */}
      </VStack>
    </Container>
  )
}
