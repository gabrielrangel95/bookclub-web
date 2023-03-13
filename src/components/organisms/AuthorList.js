import { Flex, Spinner } from '@chakra-ui/react'
import { AuthorCard } from 'components/molecules'
import { Text } from 'components/atoms'

export const AuthorList = ({ data, isLoading }) => {
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
      <Text.ScreenTitle>Autores</Text.ScreenTitle>
      <Flex mt={['12px', '24px']} flexDir="row">
        {isLoading && (
          <Flex alignItems="center" justifyContent="center" h="230px">
            <Spinner />
          </Flex>
        )}
        {(!isLoading && data?.length === 0) ||
          (!data && (
            <Flex alignItems="center" justifyContent="center" h="30px">
              <Text>Nenhum autor encontrado</Text>
            </Flex>
          ))}
        {data &&
          data?.map((item) => (
            <AuthorCard key={`author_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
