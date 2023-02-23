import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { RouterProvider } from 'react-router-dom'
import { router } from 'router'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'services/api'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
