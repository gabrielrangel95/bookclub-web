import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = () => {
  const [selected, setSelected] = useState()
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(
    ['booksById', selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  return (
    <Flex
      flexDir="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      h="400px"
    >
      <Text.ScreenTitle>Categorias</Text.ScreenTitle>
      <Flex
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        overflowX={['scroll', 'auto']}
        mt="12px"
        flexDir="row"
      >
        {data?.data &&
          data?.data.map((item) => (
            <CategoryCard
              key={`book_${item.id}`}
              selected={selected === item.id}
              onClick={() => setSelected(item.id)}
              {...item}
            />
          ))}
      </Flex>
      <Flex
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        overflowX={['scroll', 'auto']}
        mt="12px"
        pb="48px"
        flexDir="row"
      >
        {bookQuery?.data &&
          bookQuery?.data?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
