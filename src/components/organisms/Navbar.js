import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Flex
      w="100vw"
      maxW="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '48px', '80px', '112px']}
      paddingTop={['24px']}
    >
      <Image
        src="/img/logo.svg"
        alt="BookClub Logo"
        w={['100px', '160px']}
        h="48px"
        cursor="pointer"
        onClick={() => navigate('/home')}
      />
      <Flex display={['none', 'flex']}>
        <SearchBar />
      </Flex>

      <UserMenu />
    </Flex>
  )
}
