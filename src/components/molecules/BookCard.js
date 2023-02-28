import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'

export const BookCard = ({ cover_url, name, author }) => {
  return (
    <Flex
      mr="16px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        backgroundImage={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        h="230px"
        w="154px"
        borderRadius="12px"
      />
      <Text mt="8px" fontSize="12px" fontWeight="600">
        {name}
      </Text>
      <Text mt="4px" fontSize="10px">
        {author?.name}
      </Text>
    </Flex>
  )
}
