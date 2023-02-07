import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { LoginScreen } from 'modules/unauthenticated/screens'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginScreen />
    </ChakraProvider>
  )
}

export default App
