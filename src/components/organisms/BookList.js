import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { useQuery } from 'react-query'
import { getHighlightedBooks } from 'services/api/requests'

export const BookList = () => {
  const { data } = useQuery('highlighted', getHighlightedBooks)
  return (
    <Flex
      flexDir="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
    >
      <Text.ScreenTitle>Destaques</Text.ScreenTitle>
      <Flex mt="24px" flexDir="row">
        {data?.data &&
          data?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
