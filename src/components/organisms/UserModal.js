import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar
} from '@chakra-ui/react'
import { Text, Button } from 'components/atoms'
import { Input } from 'components/molecules'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'

export const UserModal = ({ onClose }) => {
  const userStore = useSelector((state) => state.user)
  const { values, handleChange, errors } = useFormik({
    initialValues: {
      name: userStore?.user?.name,
      email: userStore?.user?.email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome deve ter ao menos 3 caracteres.')
        .required('Nome é obrigatório.'),
      email: Yup.string()
        .email('E-mail inválido.')
        .required('E-mail é obrigatório.')
    }),
    onSubmit: (data) => {}
  })
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Dados Pessoais</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody>
          <Flex alignItems="center" justifyContent="center" w="100%">
            <Avatar
              name={userStore?.user?.name}
              src={userStore?.user?.avatar_url}
              w={['36px', '100px']}
              h={['36px', '100px']}
              borderWidth="4px"
              borderColor="brand.primary"
              bg="brand.greyLight"
            />
          </Flex>
          <Input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            mt="24px"
            placeholder="Nome completo"
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            mt="16px"
            placeholder="E-mail"
          />
          <Button w="100%" mt={['64px']}>
            Atualizar
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
