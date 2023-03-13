import { useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'
import { UserModal } from './UserModal'
import { PasswordModal } from './PasswordModal'
import { TermsModal } from './TermsModal'
import { PrivacyPolicyModal } from './PrivacyPolicyModal'
import { useDispatch } from 'react-redux'
import { setAll } from 'services/store/slices/user'

export const NavBar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCloseModal = () => {
    setShowModal(null)
  }

  const onLogout = () => {
    localStorage.clear()
    dispatch(
      setAll({
        user: null,
        token: null
      })
    )
    navigate('/')
  }

  return (
    <>
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
          <SearchBar query={query} setQuery={setQuery} />
        </Flex>

        <UserMenu onLogout={onLogout} setShowModal={setShowModal} />

        {showModal === 'user' && <UserModal onClose={onCloseModal} />}
        {showModal === 'password' && <PasswordModal onClose={onCloseModal} />}
        {showModal === 'terms' && <TermsModal onClose={onCloseModal} />}
        {showModal === 'privacy-policy' && (
          <PrivacyPolicyModal onClose={onCloseModal} />
        )}
      </Flex>
      <Flex
        mt="16px"
        paddingX={['24px', '48px', '80px', '112px']}
        display={['flex', 'none']}
      >
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
    </>
  )
}
