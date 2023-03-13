import { Flex, Spinner } from '@chakra-ui/react'

export const Loader = () => (
  <Flex
    mt={['24px', '48px']}
    paddingX={['24px', '48px', '80px', '112px']}
    alignItems="center"
    justifyContent="center"
  >
    <Spinner />
  </Flex>
)
