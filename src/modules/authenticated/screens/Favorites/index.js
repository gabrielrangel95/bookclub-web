import { Flex } from '@chakra-ui/react'
import { NavBar, Text, BookCard } from 'components'
import { useQuery } from 'react-query'
import { getFavorites } from 'services/api/requests'

export const FavoritesScreen = () => {
  const { data } = useQuery('getFavorites', getFavorites)

  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        flexDir="column"
        w="100%"
        mt={['24px', '48px']}
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Text.ScreenTitle>Favoritos</Text.ScreenTitle>
        <Flex
          mt="24px"
          flexDir="row"
          justifyContent={['center', 'flex-start']}
          alignItems={['center', 'flex-start']}
          flexWrap="wrap"
          w="100%"
        >
          {data?.data?.map((item) => (
            <BookCard key={`book_favorite_${item.book.id}`} {...item.book} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
