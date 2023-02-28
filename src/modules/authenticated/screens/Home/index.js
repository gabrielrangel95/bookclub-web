import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export const HomeScreen = () => {
  const userStore = useSelector((state) => state.user)
  console.log({ userStore })

  return <Flex></Flex>
}
