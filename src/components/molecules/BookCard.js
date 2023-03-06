import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const BookCard = ({ id, cover_url, name, author }) => {
  const navigate = useNavigate()

  return (
    <Flex
      mr="16px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={() => navigate(`/book-detail/${id}`)}
    >
      <Flex
        backgroundImage={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        h={['180px', '230px']}
        w={['120px', '154px']}
        borderRadius={['8px', '12px']}
      />
      <Text
        noOfLines={1}
        textAlign="center"
        mt="8px"
        fontSize="12px"
        fontWeight="600"
      >
        {name}
      </Text>
      <Text textAlign="center" mt="4px" fontSize="10px">
        {author?.name}
      </Text>
    </Flex>
  )
}
