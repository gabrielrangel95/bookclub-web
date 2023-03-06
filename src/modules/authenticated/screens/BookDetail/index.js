import { Flex, Spinner } from '@chakra-ui/react'
import { NavBar, Text, Button } from 'components'
import { useQuery } from 'react-query'
import { getBookDetail } from 'services/api/requests'
import { useParams } from 'react-router-dom'

export const BookDetailScreen = () => {
  const { id } = useParams()

  const { isLoading, data } = useQuery(
    ['booksById', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )
  console.log({ data })

  return (
    <Flex flexDir="column">
      <NavBar />
      {isLoading && <Spinner />}
      <Flex
        flexDir="row"
        alignItems="flex-start"
        justifyContent="space-between"
        mt={['24px', '48px']}
        w="100%"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          w="238px"
          h="358px"
          borderRadius="12px"
          backgroundImage={`url(${data?.data?.cover_url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Flex w="60%" mx="64px" flexDir="column">
          <Text fontSize="24px" fontWeight="extrabold">
            {data?.data?.name}
          </Text>
          <Text fontSize="16px" color="brand.greyDark">
            {data?.data?.author?.name}
          </Text>

          <Text.ScreenTitle mt="12px">Informações</Text.ScreenTitle>
          <Flex w="100%" flexDir="row" justifyContent="space-between">
            <Text fontSize="14px" color="brand.greyDark">
              Categoria: {data?.data?.category?.name}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Páginas: {data?.data?.pages}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Ano de lançamento:{' '}
              {new Date(data?.data?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="12px">Sinopse</Text.ScreenTitle>
          <Text fontSize="12px" color="brand.greyDark">
            {data?.data?.synopsis}
          </Text>
        </Flex>
        <Button>Adicionar aos favoritos</Button>
      </Flex>
    </Flex>
  )
}
