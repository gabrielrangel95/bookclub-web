import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text, Loader, EmptyMessage } from 'components/atoms'

export const BookList = ({ title, data, isLoading }) => {
  console.log({ data })

  return (
    <Flex
      flexDir="column"
      mt={['24px', '48px']}
      paddingX={['24px', '48px', '80px', '112px']}
      overflowX={['scroll', 'auto']}
      css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <Text.ScreenTitle>{title}</Text.ScreenTitle>
      {isLoading && <Loader />}

      {(!data || data?.length === 0) && (
        <EmptyMessage>Nenhum livro encontrado</EmptyMessage>
      )}

      <Flex mt={['12px', '24px']} flexDir="row">
        {data &&
          data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
      </Flex>
    </Flex>
  )
}
